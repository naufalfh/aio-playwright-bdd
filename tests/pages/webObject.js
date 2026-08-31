import { expect } from "@playwright/test";

class WebPage {
    constructor(page) {
        this.page = page;
    }

    async navigateToUrl(url) {
        await this.page.goto(url);
    }

    async getIframe(element) {
        await this.page.frameLocator(element)
    }

    async clickIframe(frame, element) {
        await frame.frameLocator(element).click();
    }

    async scrollToIframe(frame, element) {
        await frame.frameLocator(element).scrollIntoViewIfNeeded();
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

export { WebPage };