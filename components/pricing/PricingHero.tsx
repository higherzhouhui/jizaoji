"use client";

import { usePreferences } from "@/lib/preferences";
import { Tx } from "@/components/i18n/Tx";

export function PricingHero() {
  const { t } = usePreferences();
  const p = t.pricing;

  return (
    <section className="relative border-b border-line bg-canvas px-6 py-20 sm:py-28">
      <div className="hero-glow absolute inset-0" />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-brass">
          {p.kicker}
        </p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {p.title}
        </h1>
        <p className="mt-4 text-lg text-mute">
          {p.lede}
        </p>
      </div>
    </section>
  );
}
