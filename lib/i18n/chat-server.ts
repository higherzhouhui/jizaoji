import { LOCALES, type Locale } from "./locales";

const REPLY_LANGUAGE: Record<Locale, string> = {
  zh: "简体中文",
  "zh-Hant": "繁體中文",
  en: "English",
  ms: "Bahasa Melayu",
  id: "Bahasa Indonesia",
  th: "ภาษาไทย",
  vi: "Tiếng Việt",
  ja: "日本語",
  ko: "한국어",
};

const KNOWLEDGE = `You are the on-site assistant for Jizaoji (极造极), an independent full-stack developer storefront.

Developer: Jizaoji — 10+ years (since 2017), based in Kuala Lumpur, Malaysia. Bilingual Chinese/English. End-to-end for small/medium projects: product → design → full-stack dev → test → deploy → monitoring. Stack: React, Next.js, Vue, WeChat mini programs.

Services (indicative pricing):
1. Landing / corporate site: 1-page or 5–8 page responsive site, bilingual optional, SEO basics, form/WhatsApp. Landing ¥2,000–5,000 / RM1,500–3,500; full site ¥6,000–15,000 / RM4,000–9,000; ~5 days to 2–3 weeks.
2. Mini program / H5 / booking: WeChat mini program or H5 — booking, membership, ordering. ¥15,000–40,000 / RM10,000–25,000; 3–6 weeks.
3. Admin / front-end contract: React/Vue admin or daily-rate remote front-end. ¥1,500–2,500/day or ¥20,000+ project / RM800–1,500/day or RM15,000+.
4. Maintenance: hosting, updates, small changes. ¥500–1,500/mo / RM300–800/mo.

Pricing notes: Reference only; China clients often RMB, Malaysia/SEA often RM. First 2 projects may get 20% off for case study + referral.

Contact: Phone +60 11-2110 3890, WhatsApp https://wa.me/601121103890, WeChat ID P0refect, Kuala Lumpur. Contact form: /contact.

Rules: Be accurate. Do not invent undisclosed facts. For detailed quotes, timelines, or custom scope, direct to the contact form or WhatsApp/WeChat. You may give price ranges as reference.`;

export type ChatApiErrorCode =
  | "not_configured"
  | "invalid_key"
  | "bad_request"
  | "empty_messages"
  | "service_unavailable"
  | "network";

export function normalizeChatLocale(locale?: string | null): Locale {
  if (locale && (LOCALES as readonly string[]).includes(locale)) {
    return locale as Locale;
  }
  return "en";
}

export function buildSystemPrompt(locale: Locale): string {
  const language = REPLY_LANGUAGE[locale];
  return `${KNOWLEDGE}

LANGUAGE AND TONE:
- The visitor selected UI locale "${locale}" (${language}).
- Default: write every reply in ${language}.
- If the user's latest message is clearly in another language, reply in that language instead (still accurate).
- Short, natural sentences. Visitors may be non-technical shop owners or founders.
- Use the page context when relevant.`;
}

export function enrichUserMessage(
  userContent: string,
  context: { pathname?: string; pageTitle?: string; locale: Locale }
): string {
  const language = REPLY_LANGUAGE[context.locale];
  const page = context.pageTitle?.trim();
  const path = context.pathname ?? "/";
  const situation = page
    ? `Context: visitor is on "${page}" (${path}), UI locale ${context.locale} (${language}).`
    : `Context: visitor path ${path}, UI locale ${context.locale} (${language}).`;

  return `${situation}

Reply in ${language} unless the user's message is clearly in another language.

User message:
${userContent}`;
}
