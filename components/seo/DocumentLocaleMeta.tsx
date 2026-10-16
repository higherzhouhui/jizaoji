"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { usePreferences } from "@/lib/preferences";
import { pathnameToMetaKey, pageMetaFor } from "@/lib/i18n/page-meta";
import { SITE_NAME } from "@/lib/seo";

/** Updates document title and meta description when the user changes locale (client-side). */
export function DocumentLocaleMeta() {
  const { locale } = usePreferences();
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    const key = pathnameToMetaKey(pathname);
    if (!key) return;
    const { title, description } = pageMetaFor(locale, key);
    document.title = `${title} | ${SITE_NAME}`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", description);
  }, [locale, pathname]);

  return null;
}
