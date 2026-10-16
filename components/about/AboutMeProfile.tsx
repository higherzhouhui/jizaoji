"use client";

import Image from "next/image";
import { usePreferences } from "@/lib/preferences";
import { CONTACT_CONFIG } from "@/lib/contact-config";

function fillTemplate(template: string, vars: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? "");
}

export function AboutMeProfile() {
  const { t, locale } = usePreferences();
  const a = t.about;
  const dev = CONTACT_CONFIG.developer;
  const isZh = locale === "zh" || locale === "zh-Hant";
  const location = isZh ? dev.locationZh : dev.locationEn;
  const stack = isZh ? dev.stack.join("、") : dev.stack.join(", ");

  const vars = {
    years: String(dev.experienceYears),
    since: String(dev.experienceSince),
    location,
    stack,
  };

  const paragraphs = [a.intro1, a.intro2, a.intro3, a.intro4].map((p) => fillTemplate(p, vars));

  return (
    <section className="border-b border-line bg-canvas py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,300px)_1fr]">
          <div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-surface">
              <Image
                src="/images/developer-photo.jpg"
                alt={a.portraitAlt}
                fill
                className="object-cover"
                sizes="300px"
                priority
              />
            </div>
          </div>

          <div className="min-w-0">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-ink sm:text-3xl">{a.title}</h2>

            <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-mute [overflow-wrap:anywhere]">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brass">{a.experience}</p>
                <p className="mt-2 text-lg text-ink">
                  {dev.experienceYears} {a.yearsUnit} ({dev.experienceSince}–{a.present})
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brass">{a.location}</p>
                <p className="mt-2 text-lg text-ink">{location}</p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brass">{a.languages}</p>
                <p className="mt-2 text-lg text-ink">{dev.languages.join(", ")}</p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brass">{a.techStack}</p>
                <p className="mt-2 text-pretty text-lg text-ink [overflow-wrap:anywhere]">{dev.stack.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
