import { NextRequest, NextResponse } from "next/server";

const DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions";
const MODEL = "deepseek-chat";

const SYSTEM_PROMPT = `你是极造极官网的智能客服，负责回答访客关于服务的简单问题。

开发者简介：极造极是一名独立前端开发者，拥有 10 年经验（2017 年至今），现居吉隆坡，马来西亚。中英双语，专注 React、Next.js、Vue 和微信小程序开发。

主要服务：
1. 落地页/企业官网：1 页落地页或 5-8 页响应式官网，双语、SEO 基础、表单/WhatsApp 集成。落地页 ¥2,000–5,000 / RM1,500–3,500；官网 ¥6,000–15,000 / RM4,000–9,000，5 天到 2-3 周交付。
2. 小程序/H5/预约点单：微信小程序或 H5，预约、会员、点单功能。¥15,000–40,000 / RM10,000–25,000，3-6 周交付。
3. 管理后台/前端外包：React/Vue 后台或按人天远程开发。人天 ¥1,500–2,500 / RM800–1,500；项目 ¥20,000+ / RM15,000+。
4. 维护包：托管、改版、小修改。¥500–1,500/月 / RM300–800/月。

价格说明：以上为参考价格，国内客户以人民币结算，马来西亚及东南亚客户以林吉特结算。前 2 单可享 8 折优惠（换取案例授权和推荐）。

联系方式：WhatsApp (https://wa.me/qr/OBAPKC5ERBB7K1)、微信 P0refect，所在地吉隆坡。官网可在线填写咨询表单（/contact）。

要求：默认用简洁、自然的中文回答。结合「当前情景」中用户所在页面作答。若问题涉及详细报价、排期、定制方案，请建议用户通过官网咨询表单或 WhatsApp/微信进一步沟通。可以提供价格区间作为参考，但强调具体报价需要根据项目需求确定。不要编造未公开的信息。`;

/** 根据请求中的 context 生成当前情景描述，并完善最后一条用户消息 */
function applyContext(
  messages: { role: string; content: string }[],
  context?: { pathname?: string; pageTitle?: string; locale?: string } | null
): { role: string; content: string }[] {
  if (!context?.pathname || messages.length === 0) return messages;
  const last = messages[messages.length - 1];
  if (last.role !== "user") return messages;
  const english = context.locale === "en";
  const page = context.pageTitle?.trim();
  const situation = english
    ? page
      ? `Context: the visitor is on “${page}” (${context.pathname}) and is using the English site.`
      : `Context: the visitor is on ${context.pathname} and is using the English site.`
    : page
      ? `【当前情景】用户正在浏览「${page}」页面（路径：${context.pathname}）。`
      : `【当前情景】用户当前所在页面路径：${context.pathname}。`;
  const voice = english
    ? "You are the on-site assistant. Reply in clear, natural English. The visitor may be a shop owner, a founder, or someone who is not technical. If they ask for a quote or a schedule, point them to the contact form or the phone."
    : "你是在线客服，请用简洁、自然的中文回答。访客可能是店主、老板，或不懂技术的人。报价和排期请引导到咨询表单或电话。";
  const enrichedContent = `${situation}${voice}\n\n${english ? "Question" : "用户问题"}：${last.content}`;
  return [...messages.slice(0, -1), { ...last, content: enrichedContent }];
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "智能客服未配置，请设置 DEEPSEEK_API_KEY" },
      { status: 503 }
    );
  }

  let body: { messages?: { role: string; content: string }[]; context?: { pathname?: string; pageTitle?: string; locale?: string } };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "请求体无效" }, { status: 400 });
  }

  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "messages 不能为空" }, { status: 400 });
  }

  const formatted = messages.map((m: { role: string; content: string }) => ({
    role: m.role === "user" || m.role === "assistant" || m.role === "system" ? m.role : "user",
    content: String(m.content ?? "").trim(),
  }));

  const withContext = applyContext(formatted, body.context ?? null);

  const systemPresent = withContext.some((m: { role: string }) => m.role === "system");
  const apiMessages = systemPresent
    ? withContext
    : [{ role: "system" as const, content: SYSTEM_PROMPT }, ...withContext];

  if (body.context?.locale === "en") {
    const note =
      "\n\nThe visitor is using the English version of the site. Reply in clear, natural English. Keep the facts above. Do not invent prices or timelines.";
    for (const message of apiMessages) {
      if (message.role === "system") message.content += note;
    }
  }

  try {
    const res = await fetch(DEEPSEEK_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: apiMessages,
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("DeepSeek API error:", res.status, errText);
      return NextResponse.json(
        { error: res.status === 401 ? "API Key 无效" : "模型服务暂时不可用，请稍后再试" },
        { status: 502 }
      );
    }

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content ?? "";
    return NextResponse.json({ content });
  } catch (e) {
    console.error("Chat API error:", e);
    return NextResponse.json(
      { error: "网络或服务异常，请稍后再试" },
      { status: 500 }
    );
  }
}
