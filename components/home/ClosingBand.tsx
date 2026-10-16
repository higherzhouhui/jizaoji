"use client";

import Link from "next/link";
import { usePreferences, openChat } from "@/lib/preferences";
import { usesLatinDisplayFont } from "@/lib/i18n/locales";
import { btnGhost, btnPrimary } from "@/lib/ui";

export function ClosingBand() {
  const { t, locale } = usePreferences();
  const display = usesLatinDisplayFont(locale) ? "font-display" : "";
  const c = t.close;

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-page px-5 sm:px-6">
        <div className="rounded-[2rem] border border-line bg-surface px-6 py-12 sm:px-12 sm:py-16">
          <p className="font-display text-xs font-semibold tracking-[0.28em] text-brass">{c.index}</p>
          <h2 className={`mt-4 max-w-3xl text-balance text-2xl font-semibold tracking-tight text-ink sm:text-4xl sm:leading-tight lg:text-5xl ${display}`}>
            {c.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-mute sm:text-lg">{c.lede}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className={btnPrimary}>
              {c.primary}
            </Link>
            <Link href="/cases" className={btnGhost}>
              {c.secondary}
            </Link>
          </div>
          <button
            type="button"
            onClick={openChat}
            className="mt-6 text-sm font-medium text-accent underline decoration-accent/40 underline-offset-4"
          >
            {c.chat}
          </button>
        </div>
      </div>
    </section>
  );
}
