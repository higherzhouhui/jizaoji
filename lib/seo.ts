import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/locales";
import { LOCALES, HTML_LANG } from "@/lib/i18n/locales";

/** Site name for titles and structured data */
export const SITE_NAME = "Jizaoji";

/** 站点根 URL，用于 canonical、openGraph.url、JSON-LD；生产环境请配置 NEXT_PUBLIC_SITE_URL */
export const SITE_URL =
  typeof process.env.NEXT_PUBLIC_SITE_URL === "string" && process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
    : "https://jizaoji.top";

/** 默认 OG 图路径（相对或绝对），无则可不设或使用 logo */
export const DEFAULT_OG_IMAGE = "/logo.png";

/** 默认描述（首页/兜底） */
export const DEFAULT_DESCRIPTION =
  "Jizaoji — Independent full-stack developer in Kuala Lumpur. Websites, apps, WeChat mini programs, and AI tools. End-to-end delivery for small and medium projects.";

/**
 * 为页面生成完整 SEO metadata（title、description、openGraph、twitter、canonical）
 */
export function buildPageMetadata({
  title,
  description,
  path = "",
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
  locale = "zh" as Locale,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string | null;
  noIndex?: boolean;
  locale?: Locale;
}): Metadata {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = path ? `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}` : SITE_URL;
  const imageUrl =
    image && image.startsWith("http")
      ? image
      : image
        ? `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`
        : "";

  // Generate hreflang alternates
  const languages: Record<string, string> = {};
  LOCALES.forEach(loc => {
    languages[HTML_LANG[loc]] = canonicalUrl;
  });

  return {
    title,
    description,
    alternates: { 
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      type: "website",
      locale: HTML_LANG[locale].replace("-", "_"),
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url: canonicalUrl,
      ...(imageUrl ? { images: [{ url: imageUrl, width: 1200, height: 630, alt: title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
