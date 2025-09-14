# aio-playwright-bdd
Implementation of Playwright BDD for Web and API Testing

## **Get Started**

**Pre-requisite:**
1. Install VS Code for IDE
> https://code.visualstudio.com/
2. Install Node.js
> https://nodejs.org/en/download
3. Install git
> https://git-scm.com/downloads/win
4. Install allure
> https://allurereport.org/docs/install/

**Cloning Project:**
1. Open terminal and choose root folder to save the project folder
2. Run one of these command:
    - using https: `git clone https://github.com/naufalfh/aio-playwright-bdd.git`
    - using ssh: `git clone git@github.com:naufalfh/aio-playwright-bdd.git`

**Into the Project:**
1. Open VS Code
2. Open project folder
3. Open terminal and run `npm install` to install all required package, and
   run `npx playwright install` to install playwright browser
4. Also install VS Code Extension
    - Cucumber (Gherkin) Full Support (Mandatory)
5. Open terminal and run
    - To execute all tests:
    > npm run test
    - To execute by tags
    > npx bddgen --tags @tag; npx playwright test
6. Generate report
    - html: `npx playwright show-report`
    - allure: `allure serve allure-results`


**Project Structure:**
- tests
    - features
        - api
            - *.feature
        - web
            - *.feature
    - fixtures
        - fixtures.js
    - lib
        - assertLib.js
        - requestLib.js
    - pages
        - element
            - sauceDemoElements.js
        - webObject.js
    - steps
        - apiSteps.js
        - webSteps.js
    - helper.js