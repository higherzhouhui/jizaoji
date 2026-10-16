"use client";

import { usePreferences } from "@/lib/preferences";

export function FullProcessSection() {
  const { t } = usePreferences();
  const fp = t.fullProcess;

  return (
    <section className="border-t border-line py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-pretty text-xs font-semibold uppercase tracking-wide text-brass sm:text-sm">
            {fp.kicker}
          </p>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            {fp.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-mute sm:text-lg">
            {fp.lede}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {fp.steps.map((step) => (
            <div
              key={step.n}
              className="group relative flex min-h-[10.5rem] flex-col rounded-2xl border border-line bg-surface p-5 transition hover:border-accent hover:shadow-lg sm:min-h-[11rem] sm:p-6"
            >
              <div className="mb-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 font-display text-xl font-bold text-accent">
                {step.n}
              </div>
              <h3 className="text-balance text-lg font-semibold leading-snug text-ink sm:text-xl">
                {step.title}
              </h3>
              <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-mute [overflow-wrap:anywhere]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
