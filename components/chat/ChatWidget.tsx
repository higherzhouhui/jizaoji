"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { usePreferences } from "@/lib/preferences";

type Message = { role: "user" | "assistant"; content: string };

function getPageTitle(pathname: string, english: boolean): string {
  const zh = !english;
  if (!pathname || pathname === "/") return zh ? "首页" : "Home";
  if (pathname.startsWith("/about")) return zh ? "关于我们" : "About";
  if (pathname.startsWith("/contact")) return zh ? "联系" : "Contact";
  if (pathname.startsWith("/products")) return zh ? "服务" : "Services";
  if (pathname.startsWith("/cases")) return pathname === "/cases" ? (zh ? "案例" : "Work") : zh ? "案例详情" : "A story";
  if (pathname.startsWith("/blog")) return zh ? "记录" : "Notes";
  if (pathname.startsWith("/tech")) return zh ? "怎么交付" : "How it’s built";
  if (pathname.startsWith("/jobs")) return zh ? "加入我们" : "Jobs";
  if (pathname.startsWith("/solutions/ecommerce")) return zh ? "卖货" : "Selling";
  if (pathname.startsWith("/solutions/food")) return zh ? "开店" : "Shops";
  if (pathname.startsWith("/solutions/enterprise")) return zh ? "公司内部" : "Inside a company";
  if (pathname.startsWith("/solutions/education")) return zh ? "教课" : "Teaching";
  return pathname;
}

export function ChatWidget() {
  const pathname = usePathname() ?? "";
  const { t, locale } = usePreferences();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [open, messages, loading]);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("jzj-open-chat", onOpen);
    return () => window.removeEventListener("jzj-open-chat", onOpen);
  }, []);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const userMsg: Message = { role: "user", content: text };
    setMessages((current) => [...current, userMsg]);
    setLoading(true);
    try {
      const history = [...messages, userMsg].map((message) => ({
        role: message.role,
        content: message.content,
      }));
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history,
          context: { pathname, pageTitle: getPageTitle(pathname, locale === "en"), locale },
        }),
      });
      const data = await res.json();
      const raw = typeof data.error === "string" ? data.error : "";
      const fallback =
        locale === "en"
          ? raw.includes("未配置")
            ? "The assistant is not configured on this server yet. Leave a note, or call."
            : raw.includes("无效")
              ? "The assistant could not sign in. Use the form or call."
              : raw
                ? t.chat.fail
                : t.chat.fail
          : raw || t.chat.fail;
      if (!res.ok) {
        setMessages((current) => [...current, { role: "assistant", content: fallback }]);
        return;
      }
      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.content || fallback },
      ]);
    } catch {
      setMessages((current) => [...current, { role: "assistant", content: t.chat.fail }]);
    } finally {
      setLoading(false);
    }
  };

  const displayMessages =
    messages.length === 0 ? [{ role: "assistant" as const, content: t.chat.welcome }] : messages;

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div className="flex h-[min(70vh,460px)] w-[min(100vw-2rem,380px)] flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-ticket">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-ink">{t.chat.title}</p>
              <p className="text-[11px] text-mute">DeepSeek</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1.5 text-mute hover:bg-raised hover:text-ink"
              aria-label={t.chat.close}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {displayMessages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    message.role === "user" ? "bg-accent text-accent-ink" : "bg-raised text-ink"
                  }`}
                >
                  <p className="whitespace-pre-wrap break-words">{message.content}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-raised px-3.5 py-2.5 text-sm text-mute">
                  <span className="inline-flex gap-1 motion-safe:animate-pulse">···</span>
                </div>
              </div>
            )}
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              send();
            }}
            className="flex gap-2 border-t border-line p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={t.chat.placeholder}
              className="min-w-0 flex-1 rounded-full border border-line bg-canvas px-4 py-2.5 text-sm text-ink outline-none placeholder:text-mute focus:border-accent"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-accent-ink transition hover:opacity-90 disabled:opacity-50"
            >
              {t.chat.send}
            </button>
          </form>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-ink shadow-ticket transition hover:opacity-90"
        aria-label={open ? t.chat.close : t.chat.open}
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M8 10h8M8 14h5M6 19l1.2-3.2A8 8 0 116 5a8 8 0 010 16c-1.1 0-2.1-.2-3.1-.6L6 19z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
