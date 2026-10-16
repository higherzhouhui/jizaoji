import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const baseUrl = process.env.SCREENSHOT_BASE_URL || "http://localhost:3006";
const outDir = "/opt/cursor/artifacts";
fs.mkdirSync(outDir, { recursive: true });

/** Real storefront routes; locale set before any document load. */
const shots = [
  { name: "th-home", path: "/", locale: "th", waitText: "หน้าแรก" },
  {
    name: "th-header",
    path: "/products",
    locale: "th",
    waitText: "ตามธุรกิจ",
    headerOnly: true,
  },
  { name: "th-products", path: "/products", locale: "th", waitText: "แพ็กตามงาน" },
  { name: "th-solutions-ecommerce", path: "/solutions/ecommerce", locale: "th", waitText: "ดิจิทัล" },
  { name: "th-about", path: "/about", locale: "th", waitText: "เกี่ยวกับ" },
  { name: "th-pricing", path: "/pricing", locale: "th", waitText: "ราคา" },
  { name: "ms-contact", path: "/contact", locale: "ms", waitText: "Hubungi" },
  {
    name: "vi-header",
    path: "/products",
    locale: "vi",
    waitText: "Theo ngành",
    headerOnly: true,
  },
  {
    name: "ja-header",
    path: "/products",
    locale: "ja",
    waitText: "業種から",
    headerOnly: true,
  },
  {
    name: "ko-header",
    path: "/products",
    locale: "ko",
    waitText: "업종별",
    headerOnly: true,
  },
  // /jobs redirects to /about (freelancer site); capture post-redirect chrome.
  { name: "ja-jobs", path: "/jobs", locale: "ja", waitText: "について", waitPath: "/about" },
];

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  locale: "en-US",
});

for (const shot of shots) {
  const page = await context.newPage();
  await page.addInitScript((locale) => {
    localStorage.setItem("jzj-locale", locale);
    localStorage.setItem("jzj-theme", "night");
  }, shot.locale);

  const url = `${baseUrl}${shot.path}`;
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60_000 });
  if (shot.waitPath) {
    await page.waitForURL(`**${shot.waitPath}`, { timeout: 30_000 });
  }
  await page.waitForFunction(
    (locale) => document.documentElement.getAttribute("data-locale") === locale,
    shot.locale,
    { timeout: 45_000 }
  );
  await page.getByRole("banner").waitFor({ state: "visible", timeout: 15_000 });
  await page.getByText(shot.waitText, { exact: false }).first().waitFor({ timeout: 15_000 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);

  const file = path.join(outDir, `${shot.name}.png`);
  if (shot.headerOnly) {
    await page.locator("header").screenshot({ path: file });
  } else {
    await page.screenshot({ path: file, fullPage: false });
  }
  const title = await page.title();
  const localeAttr = await page.evaluate(() => document.documentElement.getAttribute("data-locale"));
  console.log("saved", file, { url, title, localeAttr });

  await page.close();
}

await browser.close();
