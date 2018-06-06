var assert = require('assert');
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));

var BROWSER_URL = require('./constant').BROWSER_URL;

describe('home page', function() {
  it('should have the right title', function () {
    browser.url(BROWSER_URL);
    browser.waitForVisible('.user-edit-button');

    chai.expect('.page-home').to.exist;
    chai.expect('.table-responsive').to.exist;

  });
});
