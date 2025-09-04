import { SauceDemoPage } from "../pages/sauceDemoObj";
import { test as base } from "playwright-bdd";

export const test = base.extend({
    sauceDemoPage: async ({page}, use) => {
        const generalPage = new SauceDemoPage(page);
        await use(generalPage);
    }
})