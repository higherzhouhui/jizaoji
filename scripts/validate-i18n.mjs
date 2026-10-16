#!/usr/bin/env node
/**
 * Validates that all locale translations have the same keys as the base (zh) translation.
 * Usage: node scripts/validate-i18n.mjs
 */

import { messages } from "../lib/i18n/messages.ts";
import { LOCALES } from "../lib/i18n/locales.ts";

function getAllKeys(obj, prefix = "") {
  const keys = [];
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      keys.push(...getAllKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

const baseLocale = "zh";
const baseKeys = new Set(getAllKeys(messages[baseLocale]));

let hasErrors = false;

for (const locale of LOCALES) {
  if (locale === baseLocale) continue;
  
  const localeKeys = new Set(getAllKeys(messages[locale]));
  const missing = [...baseKeys].filter(k => !localeKeys.has(k));
  const extra = [...localeKeys].filter(k => !baseKeys.has(k));
  
  if (missing.length > 0) {
    console.error(`❌ ${locale}: Missing ${missing.length} keys:`);
    missing.slice(0, 10).forEach(k => console.error(`   - ${k}`));
    if (missing.length > 10) console.error(`   ... and ${missing.length - 10} more`);
    hasErrors = true;
  }
  
  if (extra.length > 0) {
    console.warn(`⚠️  ${locale}: ${extra.length} extra keys (not in base):`);
    extra.slice(0, 10).forEach(k => console.warn(`   + ${k}`));
    if (extra.length > 10) console.warn(`   ... and ${extra.length - 10} more`);
  }
  
  if (missing.length === 0 && extra.length === 0) {
    console.log(`✅ ${locale}: All keys present`);
  }
}

if (hasErrors) {
  console.error("\n❌ Translation validation failed. Please fix missing keys.");
  process.exit(1);
} else {
  console.log("\n✅ All translations valid!");
  process.exit(0);
}
