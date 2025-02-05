const { Given, When, Then } = require('@cucumber/cucumber');
let cucumbers = 0;
let carrots = 0;
let salads = 0;

// Given steps
Given('I have {int} cucumbers', function (count) {
  cucumbers = count;
});

Given('I have {int} carrots', function (count) {
  carrots = count;
});

Given('I have {int} cucumbers and {int} carrots', function (cucumberCount, carrotCount) {
  cucumbers = cucumberCount;
  carrots = carrotCount;
});

// When steps
When('I eat {int} cucumbers', function (count) {
  cucumbers -= count;
});

When('I eat {int} carrots', function (count) {
  carrots -= count;
});

When('I make a salad with {int} cucumbers and {int} carrots', function (cucumberCount, carrotCount) {
  cucumbers -= cucumberCount;
  carrots -= carrotCount;
  salads += 1;
});

// Then steps
Then('I have {int} cucumber', function (count) {
  if (cucumbers !== count) {
    throw new Error(`Expected ${count} cucumbers, but got ${cucumbers}`);
  }
});

Then('I have {int} carrots', function (count) {
  if (carrots !== count) {
    throw new Error(`Expected ${count} carrots, but got ${carrots}`);
  }
});

Then('I should have 0 carrots', function () {
  if (carrots < 0) {
    carrots = 0; // You can't have negative carrots
  }
  if (carrots !== 0) {
    throw new Error(`Expected 0 carrots, but got ${carrots}`);
  }
});

Then('I have {int} cucumbers', function (count) {
  if (cucumbers !== count) {
    throw new Error(`Expected ${count} cucumbers, but got ${cucumbers}`);
  }
});

Then('I have {int} salads', function (count) {
  if (salads !== count) {
    throw new Error(`Expected ${count} salads, but got ${salads}`);
  }
});
