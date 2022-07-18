const { chromium } = require("playwright");
(async () => {
  // function code
  const browser = await chromium.launch({ headless: false, slowMo: 2000 });
  const page = await browser.newPage();
  // await page.goto("https://www.apronus.com/music/lessons/unit01.htm");
  await page.goto("https://www.apronus.com/music/lessons/unit01.htm");
  // code to type click 
  await page.pause();
  await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
  await browser.close();
})();