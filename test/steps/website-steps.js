const { Given, Then } = require('cucumber');

Given('I visit Nazmul website', function () {
    this.driver.get('http://nazmulb.wordpress.com');
});

Then('I see title {string}', function (expectedTitle) {
    self = this;
    this.driver.getTitle().then(function (actualTitle) {
        self.expect(actualTitle).to.equal(expectedTitle);
    });
});