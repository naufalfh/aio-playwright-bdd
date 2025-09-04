import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixtures";
import { elements } from "../pages/elements";

const { Given, When, Then } = createBdd(test);

Given('User navigates to {string}', async ({ sauceDemoPage }, url) => {
    await sauceDemoPage.navigateToUrl(url);
})

When('User click on {string}', async ({sauceDemoPage}, element) => {
    for (let item in elements) {
        if (item === element) {
            await sauceDemoPage.clickElement(elements[item]);
        }
    }
})

When('User select {string} on {string} list', async ({sauceDemoPage}, option, element) => {
    for (let item in elements) {
        if (item === element) {
            await sauceDemoPage.selectFromOption(elements[item], option);
        }
    }
})

When('User input {string} on {string}', async ({sauceDemoPage}, value, element) => {
    for (let item in elements) {
        if (item === element) {
            await sauceDemoPage.inputValue(elements[item], value);
        }
    }
})

Then('User verify element {string} is visible', async ({sauceDemoPage}, element) => {
    for (let item in elements) {
        if (item === element) {
            await sauceDemoPage.verifyElementIsVisible(elements[element]);
        }
    }
})

Then('User verify element {string} is not visible', async ({sauceDemoPage}, element) => {
    for (let item in elements) {
        if (item === element) {
            await sauceDemoPage.verifyElementIsNotVisible(elements[element]);
        }
    }
})


Then('User verify text {string} is visible', async ({sauceDemoPage}, text) => {
    await sauceDemoPage.verifyTextIsVisible(text);
})

Then('User verify element {string} contains {string}', async ({sauceDemoPage}, element, text) => {
    for (let item in elements) {
        if (item === element) {
            await sauceDemoPage.verifyElementContainsText(elements[element], text);
        }
    }
})

Then('User verify url contains {string}', async ({sauceDemoPage}, urlPath) => {
    await sauceDemoPage.verifyUrlContains(urlPath);
})