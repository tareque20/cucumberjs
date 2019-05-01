const { setWorldConstructor } = require('cucumber');
const webdriver = require('selenium-webdriver');
const { expect, assert } = require('chai');

class World {
    /**
     * Instantiate the object
     * @param {JSON} attach - attach anything
     * @param {Command} parameters - sets the parameters as command
     */
    constructor({ attach, parameters }) {
        this.attach = attach; // attaching screenshots to report
        this.parameters = parameters;

        this.expect = expect;
        this.assert = assert;

        this.driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();
    }
}

setWorldConstructor(World);