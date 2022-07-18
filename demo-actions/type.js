const { chromium } = require("playwright");
(async () => {
  // function code
  const browser = await chromium.launch({ headless: false, sloMo: 100 });
  const page = await browser.newPage();
  await page.goto("https://the-internet.herokuapp.com/forgot_password");
  // code to type in email textbox
  // const email = page.locator('#email');
  const email = page.$("#email");
  await email.type("maxfaber82@gmail.com", { delay: 50 });
  // await page.type('#email', 'masfsdf@dfgfd.com', {delay: 50});
  await browser.close();
})();
