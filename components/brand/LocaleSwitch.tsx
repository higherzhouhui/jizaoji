"use client";

import { usePreferences } from "@/lib/preferences";

export function LocaleSwitch() {
  const { locale, setLocale, t } = usePreferences();
  return (
    <div
      className="flex items-center rounded-full border border-line bg-surface/80 p-0.5 text-xs font-semibold"
      role="group"
      aria-label={t.a11y.language}
    >
      <button
        type="button"
        onClick={() => setLocale("zh")}
        aria-pressed={locale === "zh"}
        className={`rounded-full px-2.5 py-1 transition ${
          locale === "zh" ? "bg-ink text-canvas" : "text-mute hover:text-ink"
        }`}
      >
        中文
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`rounded-full px-2.5 py-1 font-display tracking-wide transition ${
          locale === "en" ? "bg-ink text-canvas" : "text-mute hover:text-ink"
        }`}
      >
        EN
      </button>
    </div>
  );
}
