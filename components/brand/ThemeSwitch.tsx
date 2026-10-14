"use client";

import { THEMES, usePreferences, type Theme } from "@/lib/preferences";

const SWATCH: Record<Theme, { bg: string; dot: string }> = {
  night: { bg: "linear-gradient(135deg,#12161e 46%,#8fd6c4 47%)", dot: "#8fd6c4" },
  day: { bg: "linear-gradient(135deg,#f7f4ec 46%,#0e635c 47%)", dot: "#0e635c" },
  gold: { bg: "linear-gradient(135deg,#1c160f 46%,#e4be62 47%)", dot: "#e4be62" },
  amber: { bg: "linear-gradient(135deg,#fff3e4 46%,#d85a12 47%)", dot: "#d85a12" },
};

export function ThemeSwitch({ labelled = false }: { labelled?: boolean }) {
  const { theme, setTheme, t } = usePreferences();
  const names: Record<Theme, string> = {
    night: t.themes.night,
    day: t.themes.day,
    gold: t.themes.gold,
    amber: t.themes.amber,
  };

  return (
    <div className={labelled ? "space-y-2" : ""} role="group" aria-label={t.a11y.theme}>
      {labelled && <p className="text-xs font-medium tracking-wide text-mute">{t.themes.label}</p>}
      <div className={labelled ? "grid grid-cols-2 gap-2" : "flex items-center gap-1.5"}>
        {THEMES.map((id) => {
          const active = theme === id;
          const swatch = SWATCH[id];
          return (
            <button
              key={id}
              type="button"
              onClick={() => setTheme(id)}
              aria-pressed={active}
              aria-label={names[id]}
              title={names[id]}
              className={
                labelled
                  ? `flex items-center gap-2 rounded-full border px-3 py-2 text-left text-sm transition ${
                      active ? "border-ink bg-raised text-ink" : "border-line text-mute hover:text-ink"
                    }`
                  : `relative h-7 w-7 rounded-full border-2 transition ${
                      active
                        ? "border-ink ring-2 ring-ink/30 ring-offset-2 ring-offset-canvas"
                        : "border-line hover:border-ink/40"
                    }`
              }
            >
              <span
                className={`relative shrink-0 rounded-full ${labelled ? "h-4 w-4" : "absolute inset-0.5"}`}
                style={{ background: swatch.bg, boxShadow: "inset 0 0 0 1px rgb(0 0 0 / 0.18)" }}
              >
                <span
                  className="absolute bottom-0.5 right-0.5 h-1.5 w-1.5 rounded-full"
                  style={{ background: swatch.dot }}
                />
              </span>
              {labelled && <span>{names[id]}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
