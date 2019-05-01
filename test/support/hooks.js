const { After } = require('cucumber');

After(function (scenario) {
    this.driver.quit();
});
