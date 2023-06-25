import {BasePage} from "./base-page";

const SELECTORS = {
    "category": '[class="template_nav_category_heading"]',
}

export class SidebarPage extends BasePage {

    async getCategoryName() {
        return this.getText(SELECTORS.category);
    }
}