/** @deprecated Import from `@/lib/i18n/inner/lookup` instead. */
export { getCopyLang, lineFor } from "@/lib/i18n/inner/lookup";

import enMap from "@/lib/i18n/inner/en.json";

/** English for inner pages, keyed by the Chinese already on the page. */
export const innerEn: Record<string, string> = enMap as Record<string, string>;
