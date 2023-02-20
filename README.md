# bitinsurance
Bit Insurance assignment 

## Installation :

1. Download this project and type below commands in the terminal: 
	```bash
	npm install
	```
2. How to run the bundled tests from CLI:
	```bash
	npm run cy:scripts
	```
3. How to run the bundled tests from Cypress Test Runner:
	```bash
	npm run cy:open
	```
	
# In a nutshell
Cypress is a next generation front end testing tool built for the modern web. It addresses the key pain points that the developers and QA engineers face when testing modern applications.
Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium.
This enables you to write faster, easier and more reliable tests.

## Cypress ecosystem
Cypress consists of a free, open source, locally installed Test Runner and a Dashboard Service for recording your tests. It also provides 3rd party integrations to various plugins and tools.
Cypress helps you set up and start writing tests every day while you build your application locally. Both BDD(Behavioral Driven Developement) and TDD(Test Driven Development) can be accomplished.
After building up a suite of tests and integrating Cypress with CI Provider which in our case is GitHub Actions, but Cypress Dashboard Service can even then record our test runs.

## Steps to contribute to this framework:
1. Clone this repository from GitHub into your local desktop.
2. Create a branch:
	```bash
	git checkout -b <branch_name>.
	```
3. 	Make your changes and commit them:
	```
	git commit -m '<commit_message>'
	```
4. Push to the original branch: 
	```
	git push
	```
5. Create a pull request and assign to your reviewer.

## How to write tests and How to organize the tests.
Current Cypress framework is structured in four layer. Design of current framework is comprised of -

1. End to End test - All test are written in cypress/integration/e2espec folder. Test cases are divided into two folder structure api and functional(ui). Under this based on functionality the spec file is created with functionality name. All test file should have *.spec.js filename in the end.
2. Page Actions - All repeatable action are written in this folder. Again we have divided the folder structure in two parts api action and web action. Based on the functionality again we have divided in different file.
3. Locator - CSS locator elements are stored here. Again based on the functionality we have filename of the locators. It is in JSON format.


## Reports

Cypress mocha awesome reporter is used to generate the report file. HTML output of every test execution can be found in reports/html/index.html.

Plugin used to generate reports - cypress-mochawesome-reporter https://github.com/LironEr/cypress-mochawesome-reporter


Suggestions are welcome !!.
