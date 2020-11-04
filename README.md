# Northmill recruitment task

## Warning
Created in 2019 as a part of recruitment process and wasn't updated until then :)

## Table of Contents
1. [Prerequesities](#prerequesities)
2. [Running tests on local machine](#running-tests-on-local-machine)
3. [Tests results](#tests-results)
4. [Technology stack](#technology-stack)
5. [ Plans for the future](#plans-for-the-future)
6. [Technology stack for projects with not limited time](#technology-stack-for-projects-with-not-limited-time)
7. [Tests priority](#tests-priority)
8. [Goal of test automation](#goal-of-test-automation)

## Prerequesities
* [node.js](https://nodejs.org/en/) 10.12.0 or later installed
* [JDK 1.8](https://www.oracle.com/technetwork/java/javase/downloads/index.html) or later installed
* JDK directory added as `JAVA_HOME` environment variable
* [Chrome](https://www.google.com/intl/pl_ALL/chrome/) browser (recommended version: 73.0.3683.86 (Official Build) (64-bit))
* [chromedriver](http://chromedriver.chromium.org/downloads) downloaded (for Chrome v.73)
* chromedriver path added to `PATH` environment variable

## Running tests on local machine
To execute tests, open project directory (the one with `package.json` inside)
```
cd path/to/project/directory
```
Install packages with command
```
npm install yarn -g
yarn install
```

Run tests using command
```
yarn test
```
After tests, generate and open Allure report
```
yarn open-report
```

## Tests results
Executed tests are based on test cases and assumptions described in Test Specification document.
Test execution results reveals two issues:
* providing experience in years is not required
* error message is incorrect

## Technology stack

### Criteria for the delivered solution
* readable tests
* readable reports
* failures reported with screenshot
* usage of Page Object Pattern
* ability to configure basic test framework settings
* static analysis tool introduced

#### Language
Selected language: JavaScript + TypeScript

Lately, I feel most comfortable writing JavaScript solutions. Due to the limited time of the task I decided to use the language I can be effective with to deliver automated tests in a fairly short amount of time.

#### Testing framework
Selected framework: [Webdriver.io](https://webdriver.io/)

It’s an open-source testing framework that provides a lot of things out of the box: powerful reports, Page Object Pattern support, additional layer of abstraction that translates code into BDD style test cases. 

#### Reporting tool
Selected tool: [Allure](http://allure.qatools.ru/)

Powerful reporting tool with fancy diagrams and pie charts. Makes it easier to understand the goal of created tests, verify attachments (screenshots, logs) and debug failed tests.

#### Static analysis tools
Selected tools: [TSLint](https://palantir.github.io/tslint/) & [Prettier](https://prettier.io/)

TSLint goal is to verify TypeScript code for readability and maintainability. It also prevents functionality errors. Prettier takes care of code formatting.

## Plans for the future

#### Integration with CI tool
Tests should be integrated with CI tool to achieve the idea of continuous testing: UI tests execution could be triggered by deployment of new application changes or run according to the schedule.

#### Introducing SonarQube static analysis
Introducing SonarQube provides additional valuable feedback about the code quality. Keeps historical data and metrics and makes sure that quality gate is always passed.

#### Configurable environment
Most likely we would want to run automated tests on different environments, e.g. development, staging or local instances. [dotenv](https://www.npmjs.com/package/dotenv) could be use to handle different environments and also to protect credentials away from the repository.

#### Tests parallelization
The more tests we would have in the repository, the more time it would take for them to execute. To reduce the test execution duration, maximum number of browser instances could be run simultaneously.

#### Cross-browser testing
Current solution by default executes tests locally on Chrome instance. But the page is aimed to be used by many candidates and we can’t assume they would be using any particular browser. Multi browser testing could be handled with [Selenium Grid](https://github.com/SeleniumHQ/selenium/wiki/Grid2).

#### Testing mobile views
Application form could be opened on candidate’s mobile phones, so it’s worth considering to verify created solutions on mobile views. 

#### Further verification of registration action
Success message after using candidate registration form is most likely not enough to make sure that the application was successfully processed.

**From the recruiter perspective** we would like to make sure that the new application appeared in the expected place - recruiter’s email, database or some dedicated system.

**From the candidate perspective** most likely the candidate will receive some confirmation email. Automated test should be able to verify it.

#### Introducing data-automation selectors
Some of the used elements selectors were based on classes, element's text and XPaths. To increase the test stability, it is worth considering usage of  `data-automation` tag attributes in HTML tree - should be done in cooperation with FE team. ([Ember example](https://github.com/simplabs/ember-test-selectors))

#### Further research of selected tools
Since provided solution is a proof of concept, I would suggest both:
* analysis of selected tools abilities and introducing new ones into the project (e.g. Allure step definitions for more readable reports)
* research of tools alternatives (e.g. [jasmine](https://jasmine.github.io/) vs [mocha](https://mochajs.org/), [allure](http://allure.qatools.ru/) vs other reporters, [webdriverio](https://webdriver.io/) vs [protractor](https://www.protractortest.org/#/) vs cypress.io)
* verification of selected language based on more [further criterias](#technology-stack-for-projects-with-not-limited-time)

## Technology stack for projects with not limited time
Criteria to consider:
* Technology stack behind the tested application
* Expectations regarding tests reports
* Time and budget limitations
* Experience of test developers
* Code reviewers and their willingness to share the knowledge
* Browsers requirements (versus test frameworks abilities)
* Other types of automation tests (and languages that supports them the best)

## Tests priority
I always try to structure tests mostly based on the tested functionality, not page or priority. 
Nevertheless, very often we want to execute the most critical tests or smoke tests. 

In my opinion, the most critical tests would be:
* **successful candidate registration** - to make sure that candidates that might be a good fit for the company can be successfully registered,
* **failed candidate registration** - to make sure that recruitment application wouldn't be sent to HR when candidate's experience is not enough.

Many test framework provides the ability to tag specific scenarios and marked them as e.g. smoke tests.
Unfortunately, Webdriver.io doesn't provide such functionality out of the box - so it requires a bit more investigation.

## Goal of test automation
The goal of the automated tests is a bit different depending on type of covered tests.
Sometimes it is impossible to test some behaviors manually, e.g. load and stress testing, so automation provides us a way to perform such actions. But most importantly, with test automation we would like to cover regression tests and decrease its time and effort.
We don't want to (and can't) exclude manual testing activities, but we want to make the testers' life a bit easier.
Automated regression tests should provide us the answer about the already existing functionalities after introduction of new changes:
- adding new functionalities
- bugfixing
- refactor activities
- configuration changes
- environment changes.
