"use client";

import { lineFor } from "@/lib/i18n/inner-en";
import { usePreferences } from "@/lib/preferences";
import { btnGhost } from "@/lib/ui";

const ADDRESS = "重庆市江北区观音桥红鼎国际";
const AMAP_SEARCH = "https://www.amap.com/search?query=" + encodeURIComponent(ADDRESS);
const BAIDU_SEARCH = "https://map.baidu.com/search?query=" + encodeURIComponent(ADDRESS);

export function ContactMap() {
  const { t, locale } = usePreferences();
  const c = t.contact;

  return (
    <section className="border-t border-line py-16">
      <div className="mx-auto max-w-page px-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-ink">{c.address}</h2>
            <p className="mt-2 text-sm text-mute">{lineFor(locale, "重庆市江北区观音桥红鼎国际 3001")}</p>
          </div>
          <div className="flex gap-3">
            <a href={AMAP_SEARCH} target="_blank" rel="noopener noreferrer" className={btnGhost}>
              {c.amap}
            </a>
            <a href={BAIDU_SEARCH} target="_blank" rel="noopener noreferrer" className={btnGhost}>
              {c.baidu}
            </a>
          </div>
        </div>
        <a
          href={AMAP_SEARCH}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex aspect-[16/7] flex-col items-center justify-center rounded-3xl border border-dashed border-line bg-raised text-mute transition hover:border-ink/30 hover:text-ink"
        >
          <span className="font-display text-3xl text-accent">3001</span>
          <span className="mt-2 text-sm">{c.mapHint}</span>
        </a>
      </div>
    </section>
  );
}
