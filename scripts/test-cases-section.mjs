import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  
  // Test desktop view
  console.log('Testing desktop view...');
  const desktop = await browser.newPage();
  await desktop.setViewportSize({ width: 1280, height: 800 });
  await desktop.goto('http://localhost:3006/', { waitUntil: 'networkidle' });
  await desktop.waitForTimeout(2000);
  
  // Check if cases section exists
  const casesSection = await desktop.$('#cases');
  if (!casesSection) {
    console.error('❌ Cases section not found!');
  } else {
    console.log('✓ Cases section found');
    
    // Check for case items
    const caseItems = await desktop.$$('#cases article');
    console.log(`✓ Found ${caseItems.length} case items`);
    
    // Check visibility
    const isVisible = await casesSection.isVisible();
    console.log(`✓ Section visible: ${isVisible}`);
    
    // Check for images
    const images = await desktop.$$('#cases img');
    console.log(`✓ Found ${images.length} images`);
    
    // Check for links
    const links = await desktop.$$('#cases a');
    console.log(`✓ Found ${links.length} links`);
  }
  
  await desktop.close();
  
  // Test mobile view
  console.log('\nTesting mobile view...');
  const mobile = await browser.newPage();
  await mobile.setViewportSize({ width: 375, height: 812 });
  await mobile.goto('http://localhost:3006/', { waitUntil: 'networkidle' });
  await mobile.waitForTimeout(2000);
  
  const casesSectionMobile = await mobile.$('#cases');
  if (!casesSectionMobile) {
    console.error('❌ Cases section not found on mobile!');
  } else {
    console.log('✓ Cases section found on mobile');
    const caseItemsMobile = await mobile.$$('#cases article');
    console.log(`✓ Found ${caseItemsMobile.length} case items on mobile`);
  }
  
  await mobile.close();
  await browser.close();
  
  console.log('\nTest complete!');
})();
