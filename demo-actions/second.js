import { chromium } from 'playwright';
(async() => {
// function code
const browser = await chromium.launch({headless: false, sloMo: 100});
const page = await browser.newPage();
await page.goto('http://google.com');
await browser.close();
})();
