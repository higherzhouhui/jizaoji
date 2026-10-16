import { chromium } from 'playwright';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public', 'images', 'cases');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });

  console.log('Capturing AI Xiaohongshu live site...');
  const page = await context.newPage();
  await page.goto('https://ai-xiaohongshu.vercel.app', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: join(publicDir, 'ai-xiaohongshu.png'),
    fullPage: false
  });
  console.log('✓ AI Xiaohongshu screenshot saved');

  await browser.close();
})();
