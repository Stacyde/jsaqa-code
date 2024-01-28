let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("GitHub for teams · Build like the best teams on the planet · GitHub");
  }, 6000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 6000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-muted-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign up for free")
  }, 6000);
});

  describe("Titles of other pages", () => {
  
    test("Pricing page checking title'", async () => {
      await page.goto("https://github.com/pricing");
      const btnSelector = ".btn-muted-mktg.btn-mktg";
      await page.waitForSelector(btnSelector, {
        visible: true,
      });
      const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Join for free")
  }, 6000);

  test("The h1 header pricing", async () => {
    await page.goto("https://github.com/pricing");
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("Pricing · Plans for every developer · GitHub");
  }, 6000);

  test("The first link attribute", async () => {
    await page.goto("https://github.com/pricing");
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 6000);

});
