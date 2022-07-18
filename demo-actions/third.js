const { chromium } = require('playwright');

test('visits Google page', async ({ page }) => {
  await page.goto('https://google.com');
  const pageTitle = await page.title();
  expect(pageTitle).toBe('Google');
});