import {BasePage} from "./base-page";

const SELECTORS = {
    'loginButton': 'a[href="/members"]',
}

export class FooterPage extends BasePage {

    async selectLogin() {
        await this.click(SELECTORS.loginButton);
    }
}