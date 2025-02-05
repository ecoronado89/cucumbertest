const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");


let inventory = {};

Given(/^I have (\d+) (cucumbers|carrots)$/, function (quantity, item) {
    inventory[item] = parseInt(quantity);
});

When(/^I eat (\d+) (cucumbers|carrots)$/, function (quantity, item) {
    inventory[item] = Math.max(0, inventory[item] - parseInt(quantity));
});

When(/^I make a salad with (\d+) cucumbers and (\d+) carrots$/, function (cucumber, carrots) {
    if ( inventory['cucumbers'] >= cucumber && inventory['carrots'] >= carrots) {
        inventory['cucumbers'] -= cucumber;
        inventory['carrots'] -= carrots;
        inventory['salad'] = (inventory['salad'] || 0) + 1;
    }
});

Then(/^I have (\d+) (cucumbers|carrots) in my inventory$/, function (quantity, item) {
    assert.strictEqual(inventory[item], parseInt(quantity));
});

Then(/^I have (\d+) salad$/, function(quantity) {
    assert.strictEqual(inventory['salad'], parseInt(quantity));
})