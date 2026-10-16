"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { usePreferences } from "@/lib/preferences";
import { getChatPageTitle } from "@/lib/chat/page-title";
import type { Messages } from "@/lib/i18n/messages";

type Message = { role: "user" | "assistant"; content: string };

type ChatErrorCode = keyof Messages["chat"]["errors"];

function resolveChatError(
  code: string | undefined,
  errors: Messages["chat"]["errors"],
  fallback: string
): string {
  if (!code) return fallback;
  if (code in errors) return errors[code as ChatErrorCode];
  return fallback;
}

export function ChatWidget() {
  const pathname = usePathname() ?? "";
  const { t, locale } = usePreferences();
  const c = t.chat;
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [open, messages, loading]);

  useEffect(() => {
    if (open) {
      const id = window.requestAnimationFrame(() => inputRef.current?.focus());
      return () => window.cancelAnimationFrame(id);
    }
  }, [open]);

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
      const pageTitle = getChatPageTitle(c.pages, pathname);
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history,
          context: { pathname, pageTitle, locale },
        }),
      });
      const data = (await res.json()) as { content?: string; error?: string };
      const fallback = resolveChatError(data.error, c.errors, c.fail);
      if (!res.ok) {
        setMessages((current) => [...current, { role: "assistant", content: fallback }]);
        return;
      }
      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.content?.trim() || fallback },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        { role: "assistant", content: resolveChatError("network", c.errors, c.fail) },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const displayMessages =
    messages.length === 0 ? [{ role: "assistant" as const, content: c.welcome }] : messages;

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3 pb-[env(safe-area-inset-bottom)] sm:bottom-6 sm:right-6">
      {open && (
        <div
          className="pointer-events-auto flex h-[min(72vh,32rem)] w-[min(100vw-1.25rem,24rem)] flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-ticket sm:w-[min(100vw-2rem,26rem)]"
          role="dialog"
          aria-label={c.title}
        >
          <div className="flex shrink-0 items-start justify-between gap-3 border-b border-line px-4 py-3.5">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-ink">{c.title}</p>
              <p className="text-[11px] text-mute">{c.poweredBy}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="shrink-0 rounded-full p-1.5 text-mute hover:bg-raised hover:text-ink"
              aria-label={c.close}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div
            ref={listRef}
            className="flex-1 space-y-3 overflow-y-auto overscroll-contain px-3 py-4 sm:px-4"
          >
            {displayMessages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[92%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed sm:max-w-[88%] ${
                    message.role === "user" ? "bg-accent text-accent-ink" : "bg-raised text-ink"
                  }`}
                >
                  <p className="whitespace-pre-wrap text-pretty [overflow-wrap:anywhere]">{message.content}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start" aria-live="polite">
                <div className="rounded-2xl bg-raised px-3.5 py-2.5 text-sm text-mute">
                  <span className="sr-only">{c.loading}</span>
                  <span className="inline-flex gap-1 motion-safe:animate-pulse" aria-hidden>···</span>
                </div>
              </div>
            )}
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              send();
            }}
            className="flex shrink-0 gap-2 border-t border-line p-3 sm:p-3.5"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={c.placeholder}
              className="min-w-0 flex-1 rounded-full border border-line bg-canvas px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-mute focus:border-accent sm:px-4"
              disabled={loading}
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="shrink-0 rounded-full bg-accent px-3.5 py-2.5 text-sm font-semibold text-accent-ink transition hover:opacity-90 disabled:opacity-50 sm:px-4"
            >
              {c.send}
            </button>
          </form>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-ink shadow-ticket transition hover:opacity-90"
        aria-label={open ? c.close : c.open}
        aria-expanded={open}
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
