const { firefox } = require("playwright");
(async () => {
  // function code
  const browser = await firefox.launch({ headless: false, slowMo: 600 });
  const page = await browser.newPage();
  await page.goto(
    "https://www.w3schools.com/howto/howto_css_custom_checkbox.asp"
  );
  // check the second checkbox
  checks = await page.$$(
    '#main > div.w3-row > div:nth-child(1) > input[type="checkbox"]'
  );
  await checks[1].check();
  await checks[0].uncheck();

  // select the 2nd radio button
  radios = await page.$$(
    '#main > div.w3-row > div:nth-child(1) > input[type="radio"]'
  );
  await radios[1].check();

  await page.pause();
  await browser.close();
})();
