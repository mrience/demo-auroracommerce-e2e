import {By, WebDriver} from "selenium-webdriver";

/***
 * This is a base class for all Pages. It provides reusable methods for them.
 */
export abstract class BasePage {
    protected driver: WebDriver;


    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    /***
     * It types a text into an input element. The input is cleaned before the typing.
     * In the future it's methods should be extended to accept 'string | WebElement' as selector's type.
     * @param selector css selector of the input
     * @param text text to be used
     * @protected
     */
    protected async type(selector: string, text: string) {
        const element = this.driver.findElement(By.css(selector));
        await element.clear();
        await element.sendKeys(text);
    }

    protected async click(selector: string) {
        await this.driver.findElement(By.css(selector)).click();
    }

    protected async getText(selector: string) {
        return this.driver.findElement(By.css(selector)).getText();
    }
}