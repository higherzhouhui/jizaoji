#!/usr/bin/env node
/**
 * Spot-check key pages at desktop + mobile widths.
 * Usage: node scripts/screenshot-i18n.mjs [baseUrl]
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const base = process.argv[2] || "http://127.0.0.1:3006";
const outDir = path.join(process.cwd(), "artifacts", "screenshots");
const locales = ["zh", "en", "th", "ja"];
const pages = ["/", "/pricing", "/contact"];
const viewports = [
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "mobile-390", width: 390, height: 844 },
];

async function setLocale(page, locale) {
  await page.addInitScript((loc) => {
    localStorage.setItem("jzj-locale", loc);
    document.documentElement.setAttribute("data-locale", loc);
  }, locale);
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch();
  for (const vp of viewports) {
    for (const locale of locales) {
      for (const route of pages) {
        const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
        const page = await context.newPage();
        await setLocale(page, locale);
        const url = `${base}${route}`;
        await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
        await page.waitForTimeout(400);
        const slug = `${vp.name}-${locale}-${route === "/" ? "home" : route.slice(1)}`;
        await page.screenshot({ path: path.join(outDir, `${slug}.png`), fullPage: true });
        await context.close();
      }
    }
  }
  await browser.close();
  console.log(`Screenshots saved to ${outDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
