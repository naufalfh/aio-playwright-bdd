import { WebPage } from "../pages/webObject";
import { RequestLib } from "../lib/requestLib";
import { test as base } from "playwright-bdd";

export const test = base.extend({
    webPage: async ({page}, use) => {
        const generalPage = new WebPage(page);
        await use(generalPage);
    },

    requestApi: async ({request}, use) => {
        const generalRequest = new RequestLib(request);
        await use(generalRequest);
    }
})
