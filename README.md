# Bit Insurance (Cypress + GitHub Actions)
Bit Insurance assignment 
	
# In a nutshell
Two test cases are automated in this setup. Both the test cases are automated using Cypress tool and javascript as language. By default, cypress execute test cases in Electron browser in headless mode. I have provided scripts to run the test cases in chrome browser in headless mode.

Report and video of latest test cases execution is stored in reports & videos folder repectively.

## Cypress ecosystem
Cypress consists of a free, open source, locally installed Test Runner and a Dashboard Service for recording your tests. It also provides 3rd party integrations to various plugins and tools.
Cypress helps you set up and start writing tests every day while you build your application locally. Both BDD(Behavioral Driven Developement) and TDD(Test Driven Development) can be accomplished.
After building up a suite of tests and integrating Cypress with CI Provider which in our case is GitHub Actions, but Cypress Dashboard Service can even then record our test runs.

## Requirements

To execute and develop, you will need Node.js and node package manager installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    
    $ npm --version

## Installation :
1. Download this project from github repoistory and type below commands in the terminal: 
	```bash
	npm install
	```
2. How to run the bundled tests from CLI:
	```bash
	npm run cy:run
	```
3. How to run the bundled tests in chrome browser from CLI:
        ```bash
	npm run cy:chrome
	```
4. How to run the bundled tests from Cypress Test Runner:
	```bash
	npm run cy:open
	```

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
Design of current framework is comprised of -

1. End to End test - All test are written in e2e folder. All test file should have *.cy.js filename in the end.
2. Support - All repeatable actions and supportive file are written in this folder. Based on the functionality again we have divided in different file. ie. - locator and validation 
  
   a) locator.json - CSS locator elements are stored here. It is in JSON format.
   
   b) validation.json - All validation message are stored in json format.

## Reports

Cypress mocha awesome reporter is used to generate the report file. HTML output of every test execution can be found in reports/html/index.html.

Plugin used to generate reports - cypress-mochawesome-reporter https://github.com/LironEr/cypress-mochawesome-reporter


Suggestions are welcome !!.
