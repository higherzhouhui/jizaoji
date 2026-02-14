import { SITE_NAME, SITE_URL } from "@/lib/seo";

/** Organization + WebSite 结构化数据，用于搜索引擎 */
export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "极造极信息科技有限公司 — 从 0 到 1 打造数字产品，网站、APP、小程序、AI 工具一站式交付。",
    address: {
      "@type": "PostalAddress",
      addressLocality: "重庆市江北区",
      streetAddress: "观音桥红鼎国际3001",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+86-185-1601-0812",
      contactType: "customer service",
      areaServed: "CN",
      availableLanguage: "Chinese",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "极造极信息科技有限公司官网 — 产品与服务、案例展示、解决方案、技术优势、资源中心、加入我们。",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const orgWithId = { ...organization, "@id": `${SITE_URL}/#organization` };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgWithId) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
