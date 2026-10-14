"use client";

import { lineFor } from "@/lib/i18n/inner-en";
import { usePreferences } from "@/lib/preferences";

const ADDRESS = "重庆市江北区观音桥红鼎国际3001";
const AMAP_SEARCH = "https://www.amap.com/search?query=" + encodeURIComponent("重庆市江北区观音桥红鼎国际");

export function ContactInfo() {
  const { t, locale } = usePreferences();
  const c = t.contact;
  const rows = [
    {
      label: c.phone,
      node: (
        <a href="tel:18516010812" className="font-display text-lg text-ink">
          185 1601 0812
        </a>
      ),
    },
    {
      label: c.email,
      node: (
        <a href="mailto:zhou782492184@gmail.com" className="break-all text-ink">
          zhou782492184@gmail.com
        </a>
      ),
    },
    {
      label: c.qq,
      node: (
        <>
          <a
            href="https://wpa.qq.com/msgrd?v=3&uin=782492184&site=qq&menu=yes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink"
          >
            782492184
          </a>
          <p className="mt-1 text-xs text-mute">{c.qqNote}</p>
        </>
      ),
    },
    {
      label: c.address,
      node: (
        <>
          <p className="text-ink">{lineFor(locale, ADDRESS)}</p>
          <a
            href={AMAP_SEARCH}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex text-sm font-medium text-accent"
          >
            {c.map} →
          </a>
        </>
      ),
    },
  ];

  return (
    <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
      <h2 className="text-lg font-semibold text-ink">{c.infoTitle}</h2>
      <ul className="mt-6 space-y-5">
        {rows.map((row) => (
          <li key={row.label}>
            <p className="text-xs font-medium tracking-wide text-brass">{row.label}</p>
            <div className="mt-1 text-sm">{row.node}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
