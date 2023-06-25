import webdriver = require('selenium-webdriver');
import data from "../data/categories-navigation-data.json";
import {urls} from "../../urls";
import {CategoriesBarPage} from "../pages/categories-bar-page";
import {SidebarPage} from "../pages/sidebar-page";
import {WebDriver} from "selenium-webdriver";
import {TEST_RUN_TIMEOUT} from "../constants";

/***
 * Scenario each category in main bar navigates to proper page
 * Given I am a guest user
 * When I select a category in main bar
 * Then I can see category endpoint in url
 * And  category changed product list header
 * And it is changed in sidebar
 */
describe("categories bar", () => {
    let driver: WebDriver;

    beforeEach(async () => {
        driver = await new webdriver.Builder().forBrowser('chrome').build();
        await driver.get(urls.domain);
    });

    it.each(data)("should navigate to a category", async ({index, category, endpoint}) => {
        const categoriesBar = new CategoriesBarPage(driver);
        const sidebarPage = new SidebarPage(driver);

        await categoriesBar.selectCategory(index);
        const url = `${urls.domain}${endpoint}`;
        expect(await sidebarPage.getCategoryName()).toContain(category);
        expect(await driver.getCurrentUrl()).toBe(url);
    }, TEST_RUN_TIMEOUT);

    afterEach(async () => {
        await driver.close();
    });
})