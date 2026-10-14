"use client";

import type { ReactNode } from "react";
import { innerEn } from "@/lib/i18n/inner-en";
import { usePreferences } from "@/lib/preferences";

/** Renders the same Chinese source the page already uses, or the English line when the locale is English. */
export function Tx({ children }: { children: ReactNode }) {
  const { locale } = usePreferences();
  if (locale !== "en") return <>{children}</>;
  if (typeof children === "string" || typeof children === "number") {
    const key = String(children).trim();
    return <>{innerEn[key] ?? children}</>;
  }
  return <>{children}</>;
}
