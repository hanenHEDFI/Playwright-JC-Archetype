# Archetype for end-to-end testing with Playwright & JS 

## Integration of Page Object Model for Playwright testing

It provides following features:

* Parameterization and externalization of variables (Data driven approach)
* Page Object Model to create maintainable, reusable testcases
* Running testcases on multiple browsers 
* Generate reports with screenshots

### Usage:
* To change or add more data, you simply modify the json file "data.json" defined under the folder "utils"
* To change configurations (browsers, retries ...etc), you simply modify the config file "playwright.config.js"

### Execution

* To execute this project use the command:
npx playwright test : used to execute the e2e test and generate reports ('playwright-report/index.html') with screenshots
