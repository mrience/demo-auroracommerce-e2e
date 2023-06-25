import webdriver = require('selenium-webdriver');
import {FooterPage} from "../pages/footer-page";
import {MembersPage} from "../pages/members-page";
import data from "../data/login-validation-data.json";
import {urls} from "../../urls";
import {WebDriver} from "selenium-webdriver";
import {TEST_RUN_TIMEOUT} from "../constants";

/***
 * Scenario login form returns validation messages
 * Given I am a logged out user
 * When I select log in on main page
 * And I type incorrect email and password in login form
 * Then i can see validation error message
 */
describe("members", () => {
    let driver: WebDriver;

    beforeEach(async () => {
        driver = await new webdriver.Builder().forBrowser('chrome').build();
        await driver.get(urls.domain);
    });

    it.each(data)('should fail to login with a message', async ({email, password, errorMessage}) => {
        const footerPage = new FooterPage(driver);
        const membersPage = new MembersPage(driver);

        await footerPage.selectLogin();
        await membersPage.login(email, password);

        expect(await membersPage.getValidationError()).toBe(errorMessage);
    }, TEST_RUN_TIMEOUT);

    afterEach(async () => {
        await driver.close();
    });
})