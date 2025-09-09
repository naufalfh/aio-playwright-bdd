import { SauceDemoPage } from "../pages/sauceDemoObj";
import { RequestLib } from "../requestLib";
import { test as base } from "playwright-bdd";

export const test = base.extend({
    sauceDemoPage: async ({page}, use) => {
        const generalPage = new SauceDemoPage(page);
        await use(generalPage);
    },

    reqresApi: async ({request}, use) => {
        const generalRequest = new RequestLib(request);
        // const apiContext = await request.newContext();
        await use(generalRequest);
    }
})
