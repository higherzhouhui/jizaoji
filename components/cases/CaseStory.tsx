"use client";

import Image from "next/image";
import Link from "next/link";
import { CASES_LIST, caseById, caseTitle } from "@/components/cases/casesData";
import { openChat, usePreferences } from "@/lib/preferences";
import { btnGhost, btnPrimary } from "@/lib/ui";

export function CaseStory({ id }: { id: string }) {
  const { t, locale } = usePreferences();
  const item = caseById(id);

  if (!item) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="text-2xl font-semibold text-ink">{t.detail.missing}</h1>
        <Link href="/cases" className="mt-6 inline-flex text-accent">
          {t.detail.missingLink}
        </Link>
      </div>
    );
  }

  const related = CASES_LIST.filter(
    (other) => other.id !== item.id && (other.industry === item.industry || other.type === item.type)
  ).slice(0, 2);
  const typeKey = item.type === "all" ? "all" : item.type;
  const industryKey = item.industry === "all" ? "all" : item.industry;
  const metrics = locale === "en" ? item.metricsEn : item.metrics;
  const background = locale === "en" ? item.backgroundEn : item.clientBrief;
  const solution = locale === "en" ? item.solutionEn : item.solutionBrief;

  return (
    <article>
      <header className="border-b border-line">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-6 sm:py-20">
          <Link href="/cases" className="text-sm text-mute hover:text-ink">
            ← {t.detail.back}
          </Link>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium tracking-wide text-brass">
            <span>{t.caseTypes[typeKey]}</span>
            <span aria-hidden>·</span>
            <span>{t.caseIndustries[industryKey]}</span>
          </div>
          <h1 className={`mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl ${locale === "en" ? "font-display" : ""}`}>
            {caseTitle(item, locale)}
          </h1>
          <p className="mt-6 font-display text-5xl text-accent sm:text-6xl">{item.stat.value[locale]}</p>
          <p className="mt-2 max-w-md text-mute">{item.stat.label[locale]}</p>
        </div>
      </header>

      {item.image && (
        <div className="mx-auto max-w-4xl px-5 pt-10 sm:px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-line bg-raised">
            <Image src={item.image} alt={caseTitle(item, locale)} fill className="object-cover" sizes="896px" priority />
          </div>
        </div>
      )}

      <div className="mx-auto max-w-3xl space-y-12 px-5 py-12 sm:px-6">
        <section>
          <h2 className="font-display text-xs font-semibold tracking-[0.28em] text-brass">{t.detail.trouble}</h2>
          <p className="mt-3 text-lg leading-relaxed text-ink">{item.situation[locale]}</p>
          <p className="mt-3 text-sm leading-relaxed text-mute">{background}</p>
        </section>
        <section>
          <h2 className="font-display text-xs font-semibold tracking-[0.28em] text-brass">{t.detail.made}</h2>
          <p className="mt-3 text-lg leading-relaxed text-ink">{item.delivered[locale]}</p>
          <p className="mt-4 text-sm leading-relaxed text-mute">{item.story[locale]}</p>
        </section>
        <section>
          <h2 className="font-display text-xs font-semibold tracking-[0.28em] text-brass">{t.detail.how}</h2>
          <p className="mt-3 leading-relaxed text-ink">{solution}</p>
        </section>
        <section>
          <h2 className="font-display text-xs font-semibold tracking-[0.28em] text-brass">{t.detail.numbers}</h2>
          <ul className="mt-4 space-y-3">
            {metrics.map((metric) => (
              <li key={metric} className="border-l-2 border-accent pl-4 text-ink">
                {metric}
              </li>
            ))}
          </ul>
        </section>

        <aside className="rounded-3xl border border-accent/40 bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-ink">{t.detail.likeTitle}</h2>
          <p className="mt-3 leading-relaxed text-mute">{item.likeYou[locale]}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href={`/contact?from=${item.id}`} className={btnPrimary}>
              {t.detail.likeCta}
            </Link>
            <button type="button" onClick={openChat} className={btnGhost}>
              {t.detail.chat}
            </button>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="border-t border-line bg-raised">
          <div className="mx-auto max-w-3xl px-5 py-12 sm:px-6">
            <h2 className="text-sm font-semibold tracking-wide text-mute">{t.detail.related}</h2>
            <div className="mt-4 grid gap-3">
              {related.map((other) => (
                <Link
                  key={other.id}
                  href={`/cases/${other.id}`}
                  className="flex items-baseline justify-between gap-4 rounded-2xl border border-line bg-surface px-5 py-4"
                >
                  <span className="font-medium text-ink">{caseTitle(other, locale)}</span>
                  <span className="shrink-0 font-display text-accent">{other.stat.value[locale]}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
