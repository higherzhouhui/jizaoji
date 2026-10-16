import { NextRequest, NextResponse } from "next/server";
import {
  buildSystemPrompt,
  enrichUserMessage,
  normalizeChatLocale,
  type ChatApiErrorCode,
} from "@/lib/i18n/chat-server";

const DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions";
const MODEL = "deepseek-chat";

function applyContext(
  messages: { role: string; content: string }[],
  context?: { pathname?: string; pageTitle?: string; locale?: string } | null
): { role: string; content: string }[] {
  if (messages.length === 0) return messages;
  const last = messages[messages.length - 1];
  if (last.role !== "user") return messages;

  const locale = normalizeChatLocale(context?.locale);
  const enrichedContent = enrichUserMessage(last.content, {
    pathname: context?.pathname,
    pageTitle: context?.pageTitle,
    locale,
  });

  return [...messages.slice(0, -1), { ...last, content: enrichedContent }];
}

function errorResponse(code: ChatApiErrorCode, status: number) {
  return NextResponse.json({ error: code }, { status });
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return errorResponse("not_configured", 503);
  }

  let body: {
    messages?: { role: string; content: string }[];
    context?: { pathname?: string; pageTitle?: string; locale?: string };
  };
  try {
    body = await request.json();
  } catch {
    return errorResponse("bad_request", 400);
  }

  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return errorResponse("empty_messages", 400);
  }

  const locale = normalizeChatLocale(body.context?.locale);

  const formatted = messages.map((m: { role: string; content: string }) => ({
    role: m.role === "user" || m.role === "assistant" || m.role === "system" ? m.role : "user",
    content: String(m.content ?? "").trim(),
  }));

  const withContext = applyContext(formatted, body.context ?? null);

  const systemPresent = withContext.some((m: { role: string }) => m.role === "system");
  const apiMessages = systemPresent
    ? withContext
    : [{ role: "system" as const, content: buildSystemPrompt(locale) }, ...withContext];

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
      if (res.status === 401) {
        return errorResponse("invalid_key", 502);
      }
      return errorResponse("service_unavailable", 502);
    }

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content ?? "";
    return NextResponse.json({ content });
  } catch (e) {
    console.error("Chat API error:", e);
    return errorResponse("network", 500);
  }
}
