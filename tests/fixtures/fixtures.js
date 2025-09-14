import { SauceDemoPage } from "../pages/sauceDemoObj";
import { RequestLib } from "../lib/requestLib";
import { test as base } from "playwright-bdd";

export const test = base.extend({
    sauceDemoPage: async ({page}, use) => {
        const generalPage = new SauceDemoPage(page);
        await use(generalPage);
    },

    requestApi: async ({request}, use) => {
        const generalRequest = new RequestLib(request);
        await use(generalRequest);
    }
})
