"use client";

import { useState } from "react";
import { caseById } from "@/components/cases/casesData";
import { usePreferences } from "@/lib/preferences";
import { btnPrimary, fieldClass } from "@/lib/ui";

type Props = {
  initialPosition?: string;
  fromCase?: string;
  mode?: string;
};

const NEED_VALUES = ["website", "app", "miniprogram", "uniapp", "ai", "solution", "other"] as const;

export function ContactForm({ initialPosition, fromCase, mode }: Props) {
  const { t, locale } = usePreferences();
  const c = t.contact;
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const story = fromCase ? caseById(fromCase) : undefined;
  const modeItem = mode === "1" || mode === "2" || mode === "3" ? t.work.items[Number(mode) - 1] : undefined;
  const preset = [
    story
      ? locale === "en"
        ? `I want something in the same spirit as “${story.titleEn}”.`
        : `我想做和「${story.title}」类似的事。`
      : "",
    modeItem
      ? locale === "en"
        ? `Way of working: ${modeItem.title}.`
        : `合作方式：${modeItem.title}。`
      : "",
    initialPosition
      ? locale === "en"
        ? `Role I was looking at: ${initialPosition}`
        : `意向职位：${initialPosition}`
      : "",
  ]
    .filter(Boolean)
    .join("\n\n");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: (formData.get("name") as string)?.trim() ?? "",
      company: (formData.get("company") as string)?.trim() || undefined,
      need: (formData.get("need") as string)?.trim() ?? "",
      message: (formData.get("message") as string)?.trim() || undefined,
      contact: (formData.get("contact") as string)?.trim() ?? "",
      position: initialPosition?.trim() || undefined,
    };
    const table = c.errors as Record<string, string>;
    try {
      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        const raw = typeof data.error === "string" ? data.error : "";
        setError(table[raw] ?? raw ?? table["提交失败，请稍后再试"]);
        return;
      }
      setSubmitted(true);
    } catch {
      setError(table["网络异常，请稍后再试"]);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-line bg-surface p-8">
        <p className="text-lg font-semibold text-ink">{c.okTitle}</p>
        <p className="mt-2 leading-relaxed text-mute">{c.okBody}</p>
        <a href="tel:18516010812" className="mt-4 inline-flex font-display text-xl text-accent">
          185 1601 0812
        </a>
      </div>
    );
  }

  return (
    <form key={`${locale}-${fromCase ?? ""}-${mode ?? ""}`} onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <p className="rounded-xl border border-line bg-raised px-4 py-3 text-sm text-ink" role="alert">
          {error}
        </p>
      )}
      {initialPosition && (
        <p className="rounded-xl border border-line bg-raised px-4 py-3 text-sm text-ink">
          {c.position}：<span className="font-medium">{initialPosition}</span>
        </p>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          {c.name}
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-ink">
          {c.company}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className={fieldClass}
          placeholder={c.companyPh}
        />
      </div>
      <div>
        <label htmlFor="need" className="block text-sm font-medium text-ink">
          {c.need}
        </label>
        <select id="need" name="need" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            {c.needPh}
          </option>
          {NEED_VALUES.map((value) => (
            <option key={value} value={value}>
              {c.needs[value]}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          {c.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          defaultValue={preset}
          className={fieldClass}
          placeholder={c.messagePh}
        />
      </div>
      <div>
        <label htmlFor="contact" className="block text-sm font-medium text-ink">
          {c.contact}
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          autoComplete="tel"
          className={fieldClass}
          placeholder={c.contactPh}
        />
      </div>
      <button type="submit" disabled={loading} className={`${btnPrimary} w-full`}>
        {loading ? c.sending : c.submit}
      </button>
    </form>
  );
}
