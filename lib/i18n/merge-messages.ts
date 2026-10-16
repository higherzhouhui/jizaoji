import type { Messages } from "@/lib/i18n/messages";

type Plain = Record<string, unknown>;

function isPlainObject(value: unknown): value is Plain {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** Deep-merge partial locale overrides onto a base Messages object. */
export function mergeMessages(base: Messages, overrides: Partial<Messages>): Messages {
  return deepMerge(base as Plain, overrides as Plain) as Messages;
}

function deepMerge(base: Plain, patch: Plain): Plain {
  const out: Plain = { ...base };
  for (const key of Object.keys(patch)) {
    const pv = patch[key];
    const bv = base[key];
    if (isPlainObject(pv) && isPlainObject(bv)) {
      out[key] = deepMerge(bv, pv);
    } else if (pv !== undefined) {
      out[key] = pv;
    }
  }
  return out;
}
