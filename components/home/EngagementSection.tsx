"use client";

import Link from "next/link";
import { AnimateIn } from "@/components/home/AnimateIn";
import { SectionIntro } from "@/components/home/SectionIntro";
import { usePreferences } from "@/lib/preferences";

export function EngagementSection() {
  const { t } = usePreferences();
  const w = t.work;

  return (
    <section id="work" className="scroll-mt-20 border-b border-line bg-raised py-20 sm:py-28">
      <AnimateIn>
        <div className="mx-auto max-w-page px-5 sm:px-6">
          <SectionIntro index={w.index} title={w.title} lede={w.lede} />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {w.items.map((item, index) => (
              <article
                key={item.title}
                className={`flex flex-col rounded-3xl border p-6 sm:p-8 ${
                  item.recommended ? "border-accent bg-surface" : "border-line bg-canvas"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-sm text-brass">0{index + 1}</span>
                  {item.recommended && (
                    <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-ink">
                      {w.recommend}
                    </span>
                  )}
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink">{item.fit}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{item.how}</p>
                <Link
                  href={`/contact?mode=${index + 1}`}
                  className="mt-8 text-sm font-semibold text-accent"
                >
                  {item.cta} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
