const { chromium } = require("playwright");
(async () => {
  // function code
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto("https://demoqa.com/alerts");
  // code to handle alerts
  // click 3rd button
  page.once("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.accept();
  });
  await page.click("#confirmButton");
  // click 4th button
  page.once("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.accept("my text is this");
  });
  await page.click("#promtButton");
  await browser.close();
})();
