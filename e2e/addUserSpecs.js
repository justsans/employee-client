var assert = require('assert');
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));

var BROWSER_URL = require('./constant').BROWSER_URL;

describe('add user spec', function() {
  it('add user flow', function () {
    browser.url(BROWSER_URL+'/user-edit');

    //click Add user button
    browser.waitForVisible('input[name=name]',  5000);

    //add a user
    var text = browser.getText('h1');
    assert(text === 'Add Employee');

    browser.click('[name=name]');
    browser.keys('test name');

    browser.click('[name=title]');
    browser.keys('test title');

    browser.click('[type=submit]');

    // //verify user is added
    browser.waitForVisible('.table-responsive', 5000);
  });
});
