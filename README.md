# Cucumber Mathematics Automation Framework

## Introduction
This is a test automation framework built using **Node.js** and **Cucumber** for testing basic arithmetic operations related to cucumbers and carrots. It demonstrates how to write feature files in Gherkin and implement step definitions using JavaScript.

## Project Structure
```
cucumbertest/
├── features/
│   ├── cucumber.feature
│   └── stepDefinitions/
│       └── steps.js
├── package-lock.json
├── package.json
├── README.md
└── node_modules/
```

## Installation
Ensure you have **Node.js** installed on your system. Then, run the following command to install dependencies:

```bash
npm install
```

## Running the Tests
To execute the Cucumber scenarios, run:

```bash
npx cucumber-js
```
Or:

```bash
npm test
```

## Feature File
The feature file defines three scenarios related to eating cucumbers and carrots, and making a salad. The file is located at:
```
features/cucumber.feature
```
Example scenario:
```gherkin
Scenario: Let’s eat cucumbers!
  Given I have 5 cucumbers
  When I eat 4 cucumbers
  Then I have 1 cucumber
```

## Step Definitions
The step definitions implement the logic for each Gherkin step and are located in:
```
features/stepDefinitions/steps.js
```
Example implementation:
```javascript
Given(/^I have (\d+) (cucumbers|carrots)$/, function (quantity, item) {
    inventory[item] = parseInt(quantity);
});

Then(/^I have (\d+) (cucumbers|carrots) in my inventory$/, function (quantity, item) {
    assert.strictEqual(inventory[item], parseInt(quantity));
});
```

## Notes
- The framework ensures no negative values for fruits/vegetables.
- The "making a salad" scenario correctly adjusts the counts and adds a salad.
 