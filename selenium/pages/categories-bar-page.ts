import {BasePage} from "./base-page";
import {By} from "selenium-webdriver";

const SELECTORS = {
    'category': '[class="navitem"]',
}

export class CategoriesBarPage extends BasePage {

    /***
     * Clicks on a category in categories bar.
     * @param index indicates which category should be selected, starting from 0
     */
    async selectCategory(index: string) {
        const elements = await this.driver.findElements(By.css(SELECTORS.category));
        const element = elements[index];
        await element.click();
    }
}