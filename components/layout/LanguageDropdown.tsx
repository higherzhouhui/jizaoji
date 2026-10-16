"use client";

import { useState, useRef, useEffect } from "react";
import { usePreferences } from "@/lib/preferences";
import { LOCALES, LOCALE_NAMES, localeShortCode, type Locale } from "@/lib/i18n/locales";

export function LanguageDropdown() {
  const { locale, setLocale, t } = usePreferences();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex max-w-[10.5rem] items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-medium text-ink transition hover:bg-raised focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas sm:max-w-[11.5rem] sm:gap-1.5 sm:px-2.5 sm:text-sm"
        aria-label={t.a11y.language}
        aria-expanded={isOpen}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <span className="hidden min-w-0 truncate sm:inline" title={LOCALE_NAMES[locale]}>
          {LOCALE_NAMES[locale]}
        </span>
        <span className="sm:hidden">{localeShortCode(locale)}</span>
        <svg className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-52 max-w-[min(100vw-2rem,14rem)] rounded-lg border border-line bg-surface shadow-lg">
          <div className="max-h-[min(70vh,20rem)] overflow-y-auto py-1">
            {LOCALES.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={`flex w-full items-center px-4 py-2.5 text-left text-sm transition ${
                  locale === loc
                    ? "bg-accent/10 font-semibold text-accent"
                    : "text-ink hover:bg-raised"
                }`}
              >
                {locale === loc && (
                  <svg className="mr-2 h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
                <span className={`text-pretty [overflow-wrap:anywhere] ${locale === loc ? "" : "ml-6"}`}>
                  {LOCALE_NAMES[loc]}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
