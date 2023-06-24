import webdriver = require('selenium-webdriver');
import {By} from "selenium-webdriver"; // eslint-disable-line no-eval


describe("navigation", () => {
    let driver;

    beforeAll(async () => {
        driver = await new webdriver.Builder().forBrowser('chrome').build();
    })

    it('should go to a tab', async () => {
        await driver.get("https://demo.auroracommerce.com/");
        const element = await driver.findElement(By.css('[class="maxi_overlay"] h1'));
        expect(await element.getText()).toBe("NEW IN!");
    })

    afterAll(() => {
        driver.close();
    })
})