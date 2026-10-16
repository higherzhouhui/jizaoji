"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/home/AnimateIn";
import { SectionIntro } from "@/components/home/SectionIntro";
import { CASES_LIST, caseTitle, getCopyLang, type CaseItem } from "@/components/cases/casesData";
import { usePreferences } from "@/lib/preferences";
import { btnPrimary } from "@/lib/ui";

const HOME_IDS = ["ai-xiaohongshu", "demo-restaurant", "demo-booking"];

function StoryCopy({ item, lead = false }: { item: CaseItem; lead?: boolean }) {
  const { locale, t } = usePreferences();
  const title = caseTitle(item, locale);
  return (
    <div className={lead ? "" : "flex h-full flex-col"}>
      <p className="font-display text-4xl tracking-tight text-accent sm:text-5xl">{item.stat.value[getCopyLang(locale) as "zh" | "en"]}</p>
      <p className="mt-2 max-w-xs text-sm text-mute">{item.stat.label[getCopyLang(locale) as "zh" | "en"]}</p>
      <h3 className={`mt-5 font-semibold tracking-tight text-ink ${lead ? "text-2xl sm:text-3xl" : "text-xl"}`}>
        {title}
      </h3>
      <div className="mt-5 space-y-3 text-sm leading-relaxed text-mute">
        <p>
          <span className="font-medium text-ink">{t.stories.before} · </span>
          {item.situation[getCopyLang(locale) as "zh" | "en"]}
        </p>
        <p>
          <span className="font-medium text-ink">{t.stories.after} · </span>
          {item.delivered[getCopyLang(locale) as "zh" | "en"]}
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
        <Link href={`/cases/${item.id}`} className="text-ink underline decoration-line underline-offset-4">
          {t.stories.read}
        </Link>
        <Link href={`/contact?from=${item.id}`} className="text-accent">
          {t.stories.want} →
        </Link>
      </div>
    </div>
  );
}

export function HomeStories() {
  const { t } = usePreferences();
  const items = HOME_IDS.map((id) => CASES_LIST.find((item) => item.id === id)).filter(
    (item): item is CaseItem => !!item
  );
  const [lead, ...rest] = items;

  if (!lead) return null;

  return (
    <section id="cases" className="scroll-mt-20 border-b border-line bg-raised py-20 sm:py-28">
      <AnimateIn>
        <div className="mx-auto max-w-page px-5 sm:px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionIntro index={t.stories.index} title={t.stories.title} lede={t.stories.lede} />
            <Link href="/cases" className="shrink-0 text-sm font-semibold text-accent">
              {t.stories.all} →
            </Link>
          </div>

          <article className="mt-12 overflow-hidden rounded-3xl border border-line bg-surface lg:grid lg:grid-cols-2">
            <div className="relative min-h-[240px]">
              {lead.image && (
                <Image
                  src={lead.image}
                  alt={lead.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent lg:bg-gradient-to-r" />
            </div>
            <div className="p-6 sm:p-10">
              <StoryCopy item={lead} lead />
            </div>
          </article>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {rest.map((item) => (
              <article key={item.id} className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
                <StoryCopy item={item} />
              </article>
            ))}
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}

export function StoryConsult({ caseId }: { caseId: string }) {
  const { t } = usePreferences();
  return (
    <Link href={`/contact?from=${caseId}`} className={btnPrimary}>
      {t.stories.want}
    </Link>
  );
}
