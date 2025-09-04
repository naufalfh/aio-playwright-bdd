import { expect } from "@playwright/test";

class SauceDemoPage {
    constructor(page) {
        this.page = page;
    }

    async navigateToUrl(url) {
        await this.page.goto(url);
    }

    async clickElement(element) {
        await this.page.locator(element).click();
    }

    async inputValue(element, value) {
        await this.page.locator(element).fill(value);
    }

    async selectFromOption(element, option) {
        await this.page.locator(element).selectOption(option);
    }

    async verifyElementIsVisible(element) {
        await expect(this.page.locator(element)).toBeVisible();
    }

    async verifyElementIsNotVisible(element) {
        await expect(this.page.locator(element)).toBeHidden();
    }

    async verifyTextIsVisible(text) {
        await expect(this.page.getByText(text)).toBeVisible();
    }

    async verifyElementContainsText(element, text) {
        await expect(this.page.locator(element)).toContainText(text);
    }

    async verifyUrlContains(urlPath) {
        await expect(this.page).toHaveURL(new RegExp(urlPath));
    }
}

export { SauceDemoPage };