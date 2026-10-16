"use client";

import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";
import { usePreferences } from "@/lib/preferences";
import { CONTACT_CONFIG } from "@/lib/contact-config";

export function Footer() {
  const { t } = usePreferences();
  const year = new Date().getFullYear();
  const links = [
    { href: "/#services", label: t.nav.services },
    { href: "/cases", label: t.nav.cases },
    { href: "/#work", label: t.nav.work },
    { href: "/#faq", label: t.nav.faq },
    { href: "/contact", label: t.nav.contact },
    { href: "/about", label: t.nav.about },
    { href: "/products", label: t.nav.products },
    { href: "/tech", label: t.nav.tech },
  ];

  return (
    <footer className="border-t border-line bg-raised">
      <div className="mx-auto max-w-page px-5 py-14 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-4 text-sm leading-relaxed text-mute">{t.footer.blurb}</p>
            <p className="mt-4 text-sm text-ink">{t.company}</p>
            <a href={`tel:${CONTACT_CONFIG.phone.tel}`} className="mt-2 block font-display text-lg text-ink">
              {CONTACT_CONFIG.phone.number}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm sm:grid-cols-4">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                title={item.label}
                className="text-pretty text-mute transition hover:text-ink [overflow-wrap:anywhere]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {t.company}. {t.footer.rights}
          </p>
          <a href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank" rel="noreferrer">
            {t.footer.icp}
          </a>
        </div>
      </div>
    </footer>
  );
}
