import { chromium } from 'playwright';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public', 'images', 'cases');

mkdirSync(publicDir, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });

  // Screenshot 1: Restaurant Demo
  console.log('Capturing restaurant demo...');
  const page1 = await context.newPage();
  await page1.goto('http://localhost:3006/demo/restaurant', { waitUntil: 'networkidle' });
  await page1.waitForTimeout(1000);
  await page1.screenshot({
    path: join(publicDir, 'demo-restaurant.png'),
    fullPage: false
  });
  await page1.close();
  console.log('✓ Restaurant screenshot saved');

  // Screenshot 2: Booking Demo (mobile viewport)
  console.log('Capturing booking demo...');
  const page2 = await context.newPage();
  await page2.setViewportSize({ width: 375, height: 812 });
  await page2.goto('http://localhost:3006/demo/booking', { waitUntil: 'networkidle' });
  await page2.waitForTimeout(1000);
  await page2.screenshot({
    path: join(publicDir, 'demo-booking.png'),
    fullPage: false
  });
  await page2.close();
  console.log('✓ Booking screenshot saved');

  await browser.close();
  console.log('Done!');
})();
