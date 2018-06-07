var assert = require('assert');

var BROWSER_URL = require('./constant').BROWSER_URL;

describe('home page', function() {
  it('should have the right title', function () {
    browser.url(BROWSER_URL);
    browser.waitForVisible('.user-edit-button', 5000);
    var result = browser.getTitle('foobar');

    assert.strictEqual(result, 'Employee Portal');

  });
});
