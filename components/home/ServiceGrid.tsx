"use client";

import Link from "next/link";
import { AnimateIn } from "@/components/home/AnimateIn";
import { SectionIntro } from "@/components/home/SectionIntro";
import { usePreferences } from "@/lib/preferences";

export function ServiceGrid() {
  const { t } = usePreferences();
  const s = t.services;

  return (
    <section id="services" className="scroll-mt-20 border-b border-line py-20 sm:py-28">
      <AnimateIn>
        <div className="mx-auto max-w-page px-5 sm:px-6">
          <SectionIntro index={s.index} title={s.title} lede={s.lede} />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {s.items.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col rounded-3xl border border-line bg-surface p-6 transition hover:border-ink/25 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm text-brass">0{index + 1}</span>
                  <span className="text-mute transition group-hover:translate-x-0.5 motion-safe:duration-200" aria-hidden>
                    →
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mute sm:text-base">{item.text}</p>
                <p className="mt-6 border-t border-line pt-4 text-sm font-medium text-ink">{item.get}</p>
              </Link>
            ))}
          </div>
          <Link href="/products" className="mt-8 inline-flex text-sm font-semibold text-accent">
            {s.more} →
          </Link>
        </div>
      </AnimateIn>
    </section>
  );
}
