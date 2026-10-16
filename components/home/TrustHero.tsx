"use client";

import Link from "next/link";
import { usePreferences } from "@/lib/preferences";
import { usesLatinDisplayFont } from "@/lib/i18n/locales";
import { btnGhost, btnPrimary } from "@/lib/ui";

export function TrustHero() {
  const { t, locale } = usePreferences();
  const h = t.hero;
  const display = usesLatinDisplayFont(locale) ? "font-display" : "";
  const latinEmphasis = usesLatinDisplayFont(locale);

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="studio-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-page items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-7">
          <p className="text-pretty font-display text-[10px] font-semibold uppercase leading-snug tracking-[0.2em] text-brass sm:text-xs sm:tracking-[0.28em] lg:tracking-[0.32em]">
            {h.kicker}
          </p>
          <h1 className={`mt-5 text-balance text-[1.85rem] font-semibold leading-[1.2] tracking-tight text-ink sm:text-5xl lg:text-[3.1rem] ${display}`}>
            {h.title}
            <span className={`mt-2 block text-accent ${latinEmphasis ? "font-serif text-[0.92em] font-normal italic" : ""}`}>
              {h.titleEm.split("\n").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-mute [overflow-wrap:anywhere] sm:text-lg">
            {h.lede}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className={`${btnPrimary} w-full sm:w-auto sm:max-w-full`}>
              {h.primary}
            </Link>
            <Link href="/#cases" className={`${btnGhost} w-full sm:w-auto sm:max-w-full`}>
              {h.secondary}
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {h.promises.map((item) => (
              <li key={item.k} className="border-t border-line pt-3">
                <p className="text-sm font-semibold text-ink">{item.k}</p>
                <p className="mt-1 text-pretty text-sm leading-relaxed text-mute">{item.v}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl border border-line bg-surface p-6 shadow-ticket sm:p-7">
            <span className="absolute -left-2 top-16 h-4 w-4 rounded-full border border-line bg-canvas" aria-hidden />
            <span className="absolute -right-2 top-16 h-4 w-4 rounded-full border border-line bg-canvas" aria-hidden />
            <div className="flex items-start justify-between gap-4 border-b border-dashed border-line pb-4">
              <div>
                <p className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-brass">
                  {h.ticketKicker}
                </p>
                <p className="mt-2 font-sans text-3xl font-semibold tabular-nums tracking-tight text-ink">{h.ticketNo}</p>
              </div>
              <p className="text-right text-xs leading-relaxed text-mute">{h.place}</p>
            </div>
            <dl className="mt-4 space-y-3">
              {h.rows.map((row) => (
                <div key={row.k} className="grid grid-cols-[minmax(4.5rem,38%)_1fr] gap-2 text-sm sm:grid-cols-[minmax(5.5rem,34%)_1fr] sm:gap-3">
                  <dt className="text-pretty text-mute [overflow-wrap:anywhere]">{row.k}</dt>
                  <dd className="text-pretty text-ink [overflow-wrap:anywhere]">{row.v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-xs leading-relaxed text-mute">{h.note}</p>
          </div>
        </div>
      </div>
      <div className="relative border-t border-line">
        <ul className="mx-auto grid max-w-page gap-px bg-line sm:grid-cols-3">
          {t.trust.map((item) => (
            <li key={item.k} className="bg-canvas px-5 py-4 sm:px-6">
              <p className="text-xs font-semibold tracking-wide text-brass">{item.k}</p>
              <p className="mt-1 text-pretty text-sm text-ink [overflow-wrap:anywhere]">{item.v}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
