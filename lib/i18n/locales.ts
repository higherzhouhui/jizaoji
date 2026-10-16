/**
 * Supported locales configuration
 */

export const LOCALES = [
  "zh",      // 简体中文
  "zh-Hant", // 繁體中文 (Traditional Chinese for TW/HK)
  "en",      // English
  "ms",      // Bahasa Melayu
  "id",      // Bahasa Indonesia
  "th",      // Thai
  "vi",      // Vietnamese
  "ja",      // Japanese
  "ko",      // Korean
] as const;

export type Locale = (typeof LOCALES)[number];

export const LOCALE_NAMES: Record<Locale, string> = {
  "zh": "简体中文",
  "zh-Hant": "繁體中文",
  "en": "English",
  "ms": "Bahasa Melayu",
  "id": "Bahasa Indonesia",
  "th": "ภาษาไทย",
  "vi": "Tiếng Việt",
  "ja": "日本語",
  "ko": "한국어",
};

export const HTML_LANG: Record<Locale, string> = {
  "zh": "zh-CN",
  "zh-Hant": "zh-TW",
  "en": "en",
  "ms": "ms",
  "id": "id",
  "th": "th",
  "vi": "vi",
  "ja": "ja",
  "ko": "ko",
};

/**
 * Detect locale from browser Accept-Language or navigator.language
 */
export function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";
  
  // Try navigator.language first
  const navLang = navigator.language?.toLowerCase() || "";
  
  // Map specific variants
  if (navLang.startsWith("zh-tw") || navLang.startsWith("zh-hk") || navLang.startsWith("zh-mo")) {
    return "zh-Hant";
  }
  if (navLang.startsWith("zh")) {
    return "zh";
  }
  if (navLang.startsWith("ms")) {
    return "ms";
  }
  if (navLang.startsWith("id")) {
    return "id";
  }
  if (navLang.startsWith("th")) {
    return "th";
  }
  if (navLang.startsWith("vi")) {
    return "vi";
  }
  if (navLang.startsWith("ja")) {
    return "ja";
  }
  if (navLang.startsWith("ko")) {
    return "ko";
  }
  if (navLang.startsWith("en")) {
    return "en";
  }
  
  // Fallback to English
  return "en";
}

/**
 * Check if locale prefers RM currency first
 */
export function prefersRM(locale: Locale): boolean {
  return locale === "ms" || locale === "en" || locale === "id";
}

/**
 * Check if locale prefers RMB currency first
 */
export function prefersRMB(locale: Locale): boolean {
  return locale === "zh" || locale === "zh-Hant";
}

/** Locales that use the Latin display font on marketing headings */
export function usesLatinDisplayFont(locale: Locale): boolean {
  return locale === "en" || locale === "ms" || locale === "id";
}

export function localeShortCode(locale: Locale): string {
  const codes: Record<Locale, string> = {
    zh: "简",
    "zh-Hant": "繁",
    en: "EN",
    ms: "MS",
    id: "ID",
    th: "TH",
    vi: "VI",
    ja: "JA",
    ko: "KO",
  };
  return codes[locale];
}
