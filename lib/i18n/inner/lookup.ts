import type { Locale } from "@/lib/i18n/locales";
import enMap from "./en.json";
import zhHantMap from "./zh-Hant.json";
import msMap from "./ms.json";
import idMap from "./id.json";
import thMap from "./th.json";
import viMap from "./vi.json";
import jaMap from "./ja.json";
import koMap from "./ko.json";

const innerEn = enMap as Record<string, string>;

const maps: Partial<Record<Locale, Record<string, string>>> = {
  en: innerEn,
  "zh-Hant": zhHantMap as Record<string, string>,
  ms: msMap as Record<string, string>,
  id: idMap as Record<string, string>,
  th: thMap as Record<string, string>,
  vi: viMap as Record<string, string>,
  ja: jaMap as Record<string, string>,
  ko: koMap as Record<string, string>,
};

/** Minimal simplified → traditional fallback for occasional missing zh-Hant keys. */
const S2T_PAIRS: [string, string][] = [
  ["发", "發"],
  ["开", "開"],
  ["关", "關"],
  ["门", "門"],
  ["页", "頁"],
  ["网", "網"],
  ["电", "電"],
  ["话", "話"],
  ["软", "軟"],
  ["体", "體"],
  ["验", "驗"],
  ["证", "證"],
  ["认", "認"],
  ["质", "質"],
  ["产", "產"],
  ["设", "設"],
  ["计", "計"],
  ["户", "戶"],
  ["务", "務"],
  ["数", "數"],
  ["据", "據"],
  ["库", "庫"],
  ["视", "視"],
  ["频", "頻"],
  ["录", "錄"],
  ["课", "課"],
  ["学", "學"],
  ["员", "員"],
  ["师", "師"],
  ["营", "營"],
  ["销", "銷"],
  ["购", "購"],
  ["买", "買"],
  ["卖", "賣"],
  ["货", "貨"],
  ["储", "儲"],
  ["备", "備"],
  ["单", "單"],
  ["订", "訂"],
  ["链", "鏈"],
  ["联", "聯"],
  ["络", "絡"],
  ["连", "連"],
  ["统", "統"],
  ["规", "規"],
  ["范", "範"],
  ["标", "準"],
  ["审", "審"],
  ["权", "權"],
  ["护", "護"],
  ["监", "監"],
  ["测", "測"],
  ["试", "試"],
  ["维", "維"],
  ["优", "優"],
  ["线", "線"],
  ["场", "場"],
  ["业", "業"],
  ["团", "團"],
  ["队", "隊"],
  ["组", "組"],
  ["织", "織"],
  ["构", "構"],
  ["层", "層"],
  ["级", "級"],
  ["类", "類"],
  ["种", "種"],
  ["项", "項"],
  ["资", "資"],
  ["讯", "訊"],
  ["传", "傳"],
  ["输", "輸"],
  ["应", "應"],
  ["响", "響"],
  ["变", "變"],
  ["换", "換"],
  ["转", "轉"],
  ["获", "獲"],
  ["续", "續"],
  ["费", "費"],
  ["复", "復"],
  ["预", "預"],
  ["览", "覽"],
  ["显", "顯"],
  ["隐", "隱"],
  ["删", "刪"],
  ["编", "編"],
  ["辑", "輯"],
  ["创", "創"],
  ["询", "詢"],
  ["问", "問"],
  ["评", "評"],
  ["论", "論"],
  ["极", "極"],
  ["与", "與"],
  ["为", "為"],
  ["这", "這"],
  ["时", "時"],
  ["国", "國"],
  ["台", "臺"],
  ["湾", "灣"],
  ["汉", "漢"],
  ["语", "語"],
  ["码", "碼"],
  ["盘", "盤"],
  ["亿", "億"],
  ["众", "眾"],
];

const s2tMap = new Map(S2T_PAIRS);

function toTraditional(source: string): string {
  let out = "";
  for (const ch of source) {
    out += s2tMap.get(ch) ?? ch;
  }
  return out;
}

export function getCopyLang(locale: Locale): "zh" | "en" {
  return locale === "zh" || locale === "zh-Hant" ? "zh" : "en";
}

export function lineFor(locale: Locale, source: string): string {
  const key = source.trim();
  if (locale === "zh") return source;
  if (locale === "zh-Hant") {
    const map = maps["zh-Hant"];
    return map?.[key] ?? toTraditional(key);
  }
  if (locale === "en") {
    return innerEn[key] ?? key;
  }
  const localeMap = maps[locale];
  const translated = localeMap?.[key];
  if (translated) return translated;
  const en = innerEn[key];
  if (en) return en;
  return key;
}
