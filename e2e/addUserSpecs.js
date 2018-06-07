var assert = require('assert');
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));

var BROWSER_URL = require('./constant').BROWSER_URL;

describe('add user spec', function() {
  it('should have the right title', function () {
    browser.url(BROWSER_URL);
    browser.waitForVisible('.user-edit-button');

    browser.click('.user-edit-button a');
    var text = browser.getText('h1');
    assert(text === 'Add Employee');
  });
});
