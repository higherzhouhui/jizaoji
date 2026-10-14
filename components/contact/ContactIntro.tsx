"use client";

import { usePreferences } from "@/lib/preferences";

export function ContactIntro() {
  const { t, locale } = usePreferences();
  const c = t.contact;
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-page px-5 py-16 sm:px-6 sm:py-20">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-brass">{c.kicker}</p>
        <h1 className={`mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl ${locale === "en" ? "font-display" : ""}`}>
          {c.title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-mute sm:text-lg">{c.lede}</p>
      </div>
    </section>
  );
}
