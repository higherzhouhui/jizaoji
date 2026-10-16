import type { Messages } from "@/lib/i18n/messages";

type ChatPages = Messages["chat"]["pages"];

export function getChatPageTitle(pages: ChatPages, pathname: string): string {
  if (!pathname || pathname === "/") return pages.home;
  if (pathname.startsWith("/about")) return pages.about;
  if (pathname.startsWith("/contact")) return pages.contact;
  if (pathname.startsWith("/pricing")) return pages.pricing;
  if (pathname.startsWith("/products")) return pages.products;
  if (pathname.startsWith("/cases")) {
    return pathname === "/cases" ? pages.cases : pages.caseDetail;
  }
  if (pathname.startsWith("/blog")) return pages.blog;
  if (pathname.startsWith("/tech")) return pages.tech;
  if (pathname.startsWith("/jobs")) return pages.jobs;
  if (pathname.startsWith("/solutions/ecommerce")) return pages.solutionsEcom;
  if (pathname.startsWith("/solutions/food")) return pages.solutionsFood;
  if (pathname.startsWith("/solutions/enterprise")) return pages.solutionsEnterprise;
  if (pathname.startsWith("/solutions/education")) return pages.solutionsEducation;
  return pathname;
}
