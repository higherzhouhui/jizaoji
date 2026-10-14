"use client";

import { AnimateIn } from "@/components/home/AnimateIn";
import { SectionIntro } from "@/components/home/SectionIntro";
import { usePreferences } from "@/lib/preferences";

export function FaqSection() {
  const { t } = usePreferences();
  const f = t.faq;

  return (
    <section id="faq" className="scroll-mt-20 border-b border-line py-20 sm:py-28">
      <AnimateIn>
        <div className="mx-auto grid max-w-page gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <SectionIntro index={f.index} title={f.title} lede={f.lede} />
          <div className="border-t border-line">
            {f.items.map((item) => (
              <details key={item.q} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-medium text-ink">
                  {item.q}
                  <span className="font-display text-xl text-mute transition group-open:rotate-45 motion-safe:duration-200" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="max-w-xl pb-5 text-sm leading-relaxed text-mute sm:text-base">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
