"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CASES_LIST,
  caseTitle,
  type CaseIndustry,
  type CaseType,
} from "@/components/cases/casesData";
import { usePreferences } from "@/lib/preferences";
import type { Locale } from "@/lib/i18n/messages";

const TYPES: CaseType[] = ["all", "website", "app", "miniprogram", "ai"];
const INDUSTRIES: CaseIndustry[] = ["all", "ecommerce", "education", "enterprise", "food"];

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm transition ${
        active ? "bg-ink text-canvas" : "border border-line bg-surface text-mute hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

export function CaseStories() {
  const { t, locale } = usePreferences();
  const [type, setType] = useState<CaseType>("all");
  const [industry, setIndustry] = useState<CaseIndustry>("all");

  const filtered = useMemo(
    () =>
      CASES_LIST.filter((item) => {
        if (type !== "all" && item.type !== type) return false;
        if (industry !== "all" && item.industry !== industry) return false;
        return true;
      }),
    [type, industry]
  );

  return (
    <div>
      <section className="border-b border-line">
        <div className="mx-auto max-w-page px-5 py-16 sm:px-6 sm:py-24">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-brass">
            {t.casesPage.kicker}
          </p>
          <h1 className={`mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl ${locale === "en" ? "font-display" : ""}`}>
            {t.casesPage.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">{t.casesPage.lede}</p>
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 py-10 sm:px-6">
        <div className="flex gap-2 overflow-x-auto pb-3 [scrollbar-width:none]" aria-label={t.casesPage.kicker}>
          {TYPES.map((value) => (
            <Chip key={value} active={type === value} onClick={() => setType(value)}>
              {t.caseTypes[value === "all" ? "all" : value]}
            </Chip>
          ))}
          <span className="mx-1 w-px shrink-0 bg-line" aria-hidden />
          {INDUSTRIES.map((value) => (
            <Chip key={value} active={industry === value} onClick={() => setIndustry(value)}>
              {t.caseIndustries[value]}
            </Chip>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="py-16 text-center text-mute">{t.casesPage.empty}</p>
        ) : (
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {filtered.map((item) => (
              <StoryCard key={item.id} id={item.id} locale={locale} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function StoryCard({ id, locale }: { id: string; locale: Locale }) {
  const { t } = usePreferences();
  const item = CASES_LIST.find((entry) => entry.id === id);
  if (!item) return null;
  const typeKey = item.type === "all" ? "all" : item.type;
  const industryKey = item.industry === "all" ? "all" : item.industry;

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-line bg-surface">
      <div className="grid sm:grid-cols-[148px_1fr]">
        <div className="relative min-h-[140px] bg-raised">
          {item.image && (
            <Image
              src={item.image}
              alt={caseTitle(item, locale)}
              fill
              className="object-cover"
              sizes="148px"
            />
          )}
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap gap-2 text-[11px] font-medium tracking-wide text-brass">
            <span>{t.caseTypes[typeKey]}</span>
            <span aria-hidden>·</span>
            <span>{t.caseIndustries[industryKey]}</span>
          </div>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink">{caseTitle(item, locale)}</h2>
          <p className="mt-3 font-display text-3xl text-accent">{item.stat.value[locale]}</p>
          <p className="mt-1 text-sm text-mute">{item.stat.label[locale]}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 border-t border-line px-5 py-5 text-sm leading-relaxed text-mute sm:px-6">
        <p>
          <span className="font-medium text-ink">{t.stories.before} · </span>
          {item.situation[locale]}
        </p>
        <p>
          <span className="font-medium text-ink">{t.stories.after} · </span>
          {item.delivered[locale]}
        </p>
        <div className="mt-2 flex flex-wrap gap-4 font-semibold">
          <Link href={`/cases/${item.id}`} className="text-ink underline decoration-line underline-offset-4">
            {t.stories.read}
          </Link>
          <Link href={`/contact?from=${item.id}`} className="text-accent">
            {t.casesPage.ask} →
          </Link>
        </div>
      </div>
    </article>
  );
}
