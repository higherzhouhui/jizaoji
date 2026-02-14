import { NextRequest, NextResponse } from "next/server";

const DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions";
const MODEL = "deepseek-chat";

const SYSTEM_PROMPT = `你是极造极信息科技有限公司官网的智能客服，负责回答访客关于公司、产品与服务的简单问题。

公司简介：极造极信息科技有限公司，从 0 到 1 打造数字产品，提供网站搭建、APP 开发、微信小程序、uni-app 跨端、AI 工具开发等服务。

主要产品与服务：数字阵地建设（官网、APP、小程序）、跨端开发引擎（uni-app）、智能应用工场（AI 工具）。解决方案覆盖电商/零售、餐饮/生活服务、企业/办公、教育/培训等行业。

联系方式：电话 18516010812，邮箱 782492184@qq.com，QQ 782492184，地址 重庆市江北区观音桥红鼎国际3001。官网可在线填写「免费咨询」表单。

要求：回答简洁、友好，用中文。结合「当前情景」中用户所在页面作答，更贴合上下文。若问题涉及报价、定制方案等复杂需求，请建议用户通过官网「免费咨询」或拨打电话/添加 QQ 进一步沟通。不要编造公司未公开的信息。`;

/** 根据请求中的 context 生成当前情景描述，并完善最后一条用户消息 */
function applyContext(
  messages: { role: string; content: string }[],
  context?: { pathname?: string; pageTitle?: string } | null
): { role: string; content: string }[] {
  if (!context?.pathname || messages.length === 0) return messages;
  const last = messages[messages.length - 1];
  if (last.role !== "user") return messages;
  const situation =
    context.pageTitle && context.pageTitle.trim()
      ? `【当前情景】用户正在浏览「${context.pageTitle.trim()}」页面（路径：${context.pathname}）。`
      : `【当前情景】用户当前所在页面路径：${context.pathname}。`;
  const enrichedContent = `${situation}你是在线客服，请用简洁、友好的语言回答用户问题，用户的身份可能是企业老板、产品经理、技术负责人、市场营销人员、普通用户等，请根据用户的身份和需求给出相应的回答。\n\n用户问题：${last.content}`;
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

  let body: { messages?: { role: string; content: string }[]; context?: { pathname?: string; pageTitle?: string } };
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
