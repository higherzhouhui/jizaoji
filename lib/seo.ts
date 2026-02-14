import type { Metadata } from "next";

/** 站点名称，与 layout 一致 */
export const SITE_NAME = "极造极信息科技有限公司";

/** 站点根 URL，用于 canonical、openGraph.url、JSON-LD；生产环境请配置 NEXT_PUBLIC_SITE_URL */
export const SITE_URL =
  typeof process.env.NEXT_PUBLIC_SITE_URL === "string" && process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
    : "https://jizaoji.top";

/** 默认 OG 图路径（相对或绝对），无则可不设或使用 logo */
export const DEFAULT_OG_IMAGE = "/logo.png";

/** 默认描述（首页/兜底） */
export const DEFAULT_DESCRIPTION =
  "极造极信息科技有限公司 — 从 0 到 1 打造数字产品，网站、APP、小程序、AI 工具一站式交付，用技术创造价值。";

/**
 * 为页面生成完整 SEO metadata（title、description、openGraph、twitter、canonical）
 */
export function buildPageMetadata({
  title,
  description,
  path = "",
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string | null;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = path ? `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}` : SITE_URL;
  const imageUrl =
    image && image.startsWith("http")
      ? image
      : image
        ? `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`
        : "";

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "website",
      locale: "zh_CN",
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
