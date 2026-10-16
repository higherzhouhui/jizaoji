"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { messages, type Messages } from "@/lib/i18n/messages";
import { detectLocale, HTML_LANG, LOCALES, type Locale } from "@/lib/i18n/locales";

export const THEMES = ["night", "day", "gold", "amber"] as const;
export type Theme = (typeof THEMES)[number];

export function isTheme(value: string | null | undefined): value is Theme {
  return !!value && (THEMES as readonly string[]).includes(value);
}

type Preferences = {
  theme: Theme;
  locale: Locale;
  setTheme: (theme: Theme) => void;
  setLocale: (locale: Locale) => void;
  t: Messages;
};

const PreferencesContext = createContext<Preferences | null>(null);

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("night");
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedTheme = document.documentElement.getAttribute("data-theme");
    const storedLocale = document.documentElement.getAttribute("data-locale") as Locale | null;
    
    // Check localStorage for manual selection (overrides detection)
    let savedLocale: Locale | null = null;
    try {
      savedLocale = localStorage.getItem("jzj-locale") as Locale | null;
    } catch {
      /* private mode */
    }
    
    // Priority: localStorage > HTML attribute > auto-detect
    let finalLocale: Locale;
    if (savedLocale && LOCALES.includes(savedLocale)) {
      finalLocale = savedLocale;
    } else if (storedLocale && LOCALES.includes(storedLocale)) {
      finalLocale = storedLocale;
    } else {
      finalLocale = detectLocale();
    }
    
    if (isTheme(storedTheme)) setThemeState(storedTheme);
    setLocaleState(finalLocale);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.setAttribute("data-locale", locale);
    root.lang = HTML_LANG[locale];
    try {
      localStorage.setItem("jzj-theme", theme);
      localStorage.setItem("jzj-locale", locale);
    } catch {
      /* private mode */
    }
  }, [theme, locale, ready]);

  const value = useMemo<Preferences>(
    () => ({
      theme,
      locale,
      setTheme: setThemeState,
      setLocale: setLocaleState,
      t: messages[locale],
    }),
    [theme, locale]
  );

  return (
    <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const ctx = useContext(PreferencesContext);
  if (!ctx) {
    throw new Error("usePreferences must be used within PreferencesProvider");
  }
  return ctx;
}

export function openChat() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("jzj-open-chat"));
}
