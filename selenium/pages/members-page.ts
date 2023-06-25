import {BasePage} from "./base-page";


const SELECTORS = {
    'loginEmailInput': '[id="email_address"]',
    'loginPasswordInput': '[id="password"]',
    'loginSubmitButton': '[name="login"]',
    'loginError': '[class="errorbox"]',
}

export class MembersPage extends BasePage {

    async login(email: string, password: string) {
        await this.type(SELECTORS.loginEmailInput, email);
        await this.type(SELECTORS.loginPasswordInput, password);
        await this.click(SELECTORS.loginSubmitButton);
    }

    async getValidationError() {
        return this.getText(SELECTORS.loginError);
    }
}