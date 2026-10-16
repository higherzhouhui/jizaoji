import { SITE_NAME, SITE_URL } from "@/lib/seo";
import { CONTACT_CONFIG } from "@/lib/contact-config";

/** Person + ProfessionalService 结构化数据，用于搜索引擎 */
export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zhou Hui",
    jobTitle: "Independent Full-Stack Developer",
    description:
      "10-year experienced frontend developer based in Kuala Lumpur, specializing in websites, apps, mini-programs, and AI tools. Bilingual service (Chinese/English) with 2-4 weeks delivery.",
    url: SITE_URL,
    image: `${SITE_URL}/images/developer-photo.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kuala Lumpur",
      addressCountry: "MY",
    },
    knowsLanguage: ["zh-CN", "en"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: CONTACT_CONFIG.whatsapp.url,
      availableLanguage: ["Chinese", "English"],
    },
    sameAs: [
      CONTACT_CONFIG.whatsapp.url,
      "https://github.com/higherzhouhui",
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Independent full-stack developer offering website development, mobile apps, mini-programs, and AI tools. Based in Kuala Lumpur with 10 years of experience.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kuala Lumpur",
      addressCountry: "MY",
    },
    areaServed: ["MY", "CN", "SG"],
    priceRange: "RM 2,500 - RM 15,000",
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Independent developer portfolio — Services, case studies, pricing, and contact information for web development, apps, and AI tools.",
    publisher: { "@id": `${SITE_URL}/#person` },
  };

  const personWithId = { ...person, "@id": `${SITE_URL}/#person` };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personWithId) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
