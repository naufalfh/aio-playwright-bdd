import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixtures";
import * as helper from "../helper";

const { Given, When, Then } = createBdd(test);

/* Pre-condition Steps */

Given('User navigates to {string}', async ( { webPage }, url ) => {
    await webPage.navigateToUrl(url);
})

/* Main Steps */

When('User click on {string}', async ( { webPage }, element ) => {
    const locator = await helper.readElement(element);
    await webPage.clickElement(locator);
})

When('User select {string} on {string} list', async ( { webPage }, option, element ) => {
    const locator = await helper.readElement(element);
    await webPage.selectFromOption(locator, option);
})

When('User input {string} on {string}', async ( { webPage }, value, element ) => {
    const locator = await helper.readElement(element);
    const inputValue = await helper.readEnv(value);

    await webPage.inputValue(locator, inputValue);
})

When('User click iframe {string} element', async ( { webPage }, element ) => {
    let iframe = await webPage.getIframe(await helper.readElement(element));

    await webPage.clickIframe(iframe, element);
})

When('User scroll into iframe {string} element', async ( { webPage }, element ) => {
    let iframe = await webPage.getIframe(await helper.readElement(element));

    await webPage.scrollToIframe(iframe, element);
})

/* Verification Steps */

Then('User verify element {string} is visible', async ( { webPage }, element ) => {
    const locator = await helper.readElement(element);
    await webPage.verifyElementIsVisible(locator);
})

Then('User verify element {string} is not visible', async ( { webPage }, element ) => {
    const locator = await helper.readElement(element);
    await webPage.verifyElementIsNotVisible(locator);
})


Then('User verify text {string} is visible', async ( { webPage }, text ) => {
    await webPage.verifyTextIsVisible(text);
})

Then('User verify element {string} contains {string}', async ( { webPage }, element, text ) => {
    const locator = await helper.readElement(element);
    await webPage.verifyElementContainsText(locator, text);
})

Then('User verify url contains {string}', async ( { webPage }, urlPath ) => {
    await webPage.verifyUrlContains(urlPath);
})