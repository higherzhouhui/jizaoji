"use client";

import { usePreferences } from "@/lib/preferences";

export function AboutPageHero() {
  const { t } = usePreferences();
  const a = t.about;

  return (
    <section className="relative border-b border-line bg-canvas px-5 py-20 sm:px-6 sm:py-28">
      <div className="hero-glow absolute inset-0" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {a.pageTitle}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-mute sm:text-lg">
          {a.pageLede}
        </p>
      </div>
    </section>
  );
}
