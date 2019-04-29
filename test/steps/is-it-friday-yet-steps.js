const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

function isItFriday(today) {
    if (today === "Friday") {
        return "Yes";
    } else {
        return "No";
    }
}

Given('today is {string}', function (givenDay) {
    this.today = givenDay;
});

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
    expect(this.actualAnswer).to.equal(expectedAnswer);
});