import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixtures";
import * as helper from "../helper";

const { Given, When, Then } = createBdd(test);

Given('User navigates to {string}', async ({ sauceDemoPage }, url) => {
    await sauceDemoPage.navigateToUrl(url);
})

When('User click on {string}', async ({sauceDemoPage}, element) => {
    const locator = await helper.readElement(element);
    await sauceDemoPage.clickElement(locator);
})

When('User select {string} on {string} list', async ({sauceDemoPage}, option, element) => {
    const locator = await helper.readElement(element);
    await sauceDemoPage.selectFromOption(locator, option);
})

When('User input {string} on {string}', async ({sauceDemoPage}, value, element) => {
    const locator = await helper.readElement(element);
    const inputValue = await helper.readEnv(value);

    await sauceDemoPage.inputValue(locator, inputValue);
})

Then('User verify element {string} is visible', async ({sauceDemoPage}, element) => {
    const locator = await helper.readElement(element);
    await sauceDemoPage.verifyElementIsVisible(locator);
})

Then('User verify element {string} is not visible', async ({sauceDemoPage}, element) => {
    const locator = await helper.readElement(element);
    await sauceDemoPage.verifyElementIsNotVisible(locator);
})


Then('User verify text {string} is visible', async ({sauceDemoPage}, text) => {
    await sauceDemoPage.verifyTextIsVisible(text);
})

Then('User verify element {string} contains {string}', async ({sauceDemoPage}, element, text) => {
    const locator = await helper.readElement(element);
    await sauceDemoPage.verifyElementContainsText(locator, text);
})

Then('User verify url contains {string}', async ({sauceDemoPage}, urlPath) => {
    await sauceDemoPage.verifyUrlContains(urlPath);
})