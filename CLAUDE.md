# aio-playwright-bdd — Project Conventions

Playwright BDD (Cucumber-style Gherkin) test automation for web and API testing.

## Structure & Conventions

- **Step definitions are generic and reusable**, keyed by element name strings — not written per feature. See [tests/steps/webSteps.js](tests/steps/webSteps.js), e.g. `User click on "loginButton"`, `User input "ENV_USERNAME" on "usernameField"`. Before adding a new step, check whether an existing generic step already covers the action.
- **Locators are centralized per site** in `tests/pages/elements/<siteName>Elements.js` (e.g. [sauceDemoElements.js](tests/pages/elements/sauceDemoElements.js)), keyed by string, and re-exported from [tests/pages/elements/index.js](tests/pages/elements/index.js). Steps resolve locators via `helper.readElement` in [tests/helper.js](tests/helper.js) — never hardcode a selector inline in a step or feature file.
- **Dynamic/sensitive values** are read from `.env` via the `ENV_` prefix convention (`helper.readEnv` in [tests/helper.js](tests/helper.js)), e.g. `User input "ENV_USERNAME" on "usernameField"` reads `USERNAME` from `.env`.
- **Feature files** use tags for both test case IDs and execution mode, e.g. `@TC-1`, `@mode:parallel`. See [tests/features/web/loginPage.feature](tests/features/web/loginPage.feature) for the `Background` + `Scenario Outline` pattern.
- **Page interactions** live in [tests/pages/webObject.js](tests/pages/webObject.js) (`clickElement`, `inputValue`, `selectFromOption`, `verifyElementIsVisible`, `verifyElementContainsText`, `verifyUrlContains`, etc.) — steps call into these rather than touching `page` directly.
- API testing follows the same pattern under `tests/features/api`, `tests/steps/apiSteps.js`, and [tests/lib/requestLib.js](tests/lib/requestLib.js) / [tests/lib/assertLib.js](tests/lib/assertLib.js).

## Authoring a New Test with Playwright MCP

When Playwright MCP tools are available, use this workflow to add a new test:

1. Explore the target page with `browser_navigate` + `browser_snapshot` (accessibility snapshot) to identify the elements you need — prefer this over ad-hoc scripts or manual screenshots.
2. Add any newly discovered locators to the appropriate `tests/pages/elements/<siteName>Elements.js` file. If it's a new site, create the file and re-export it from `tests/pages/elements/index.js`.
3. Write the scenario in `tests/features/web/*.feature` (or `tests/features/api/*.feature`), reusing existing generic steps wherever possible.
4. Only add a new step definition to `webSteps.js` / `apiSteps.js` if no existing generic step fits the action.
5. Verify: `npm run bddgen && npx playwright test` (or filtered by tag: `npx bddgen --tags @tag; npx playwright test`).

## Running Tests

- All tests: `npm run test`
- By tag: `npx bddgen --tags @tag; npx playwright test`
- HTML report: `npx playwright show-report`
- Allure report: `allure serve allure-results`
