"use client";

import { AnimateIn } from "@/components/home/AnimateIn";
import { SectionIntro } from "@/components/home/SectionIntro";
import { usePreferences } from "@/lib/preferences";

export function ProcessSection() {
  const { t } = usePreferences();
  const p = t.process;

  return (
    <section id="process" className="scroll-mt-20 border-b border-line py-20 sm:py-28">
      <AnimateIn>
        <div className="mx-auto max-w-page px-5 sm:px-6">
          <SectionIntro index={p.index} title={p.title} lede={p.lede} />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {p.steps.map((step) => (
              <li key={step.n} className="bg-canvas p-6 sm:p-7">
                <p className="font-display text-3xl text-accent">{step.n}</p>
                <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </AnimateIn>
    </section>
  );
}
