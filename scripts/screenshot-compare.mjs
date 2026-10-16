#!/usr/bin/env node
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const outDir = path.join(process.cwd(), "artifacts", "screenshots");
const checks = [
  { label: "before-prod-th-home", url: "https://jizaoji.vercel.app/", locale: "th" },
  { label: "after-local-th-home", url: "http://127.0.0.1:3006/", locale: "th" },
  { label: "after-local-ja-pricing-mobile", url: "http://127.0.0.1:3006/pricing", locale: "ja", width: 390, height: 844 },
  { label: "after-local-en-contact-desktop", url: "http://127.0.0.1:3006/contact", locale: "en", width: 1440, height: 900 },
];

async function shot(page, locale) {
  await page.addInitScript((loc) => {
    localStorage.setItem("jzj-locale", loc);
    document.documentElement.setAttribute("data-locale", loc);
  }, locale);
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch();
  for (const check of checks) {
    const context = await browser.newContext({
      viewport: { width: check.width ?? 1440, height: check.height ?? 900 },
    });
    const page = await context.newPage();
    await shot(page, check.locale);
    await page.goto(check.url, { waitUntil: "networkidle", timeout: 90_000 });
    await page.waitForTimeout(600);
    await page.screenshot({ path: path.join(outDir, `${check.label}.png`), fullPage: false });
    await context.close();
  }
  await browser.close();
}

main();
