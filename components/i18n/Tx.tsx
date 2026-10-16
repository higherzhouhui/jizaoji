"use client";

import type { ReactNode } from "react";
import { lineFor } from "@/lib/i18n/inner/lookup";
import { usePreferences } from "@/lib/preferences";

/** Renders localized copy for string children; Chinese source keys stay as-is for zh. */
export function Tx({ children }: { children: ReactNode }) {
  const { locale } = usePreferences();
  if (typeof children === "string" || typeof children === "number") {
    const key = String(children).trim();
    return <>{lineFor(locale, key)}</>;
  }
  return <>{children}</>;
}
