var assert = require('assert');

describe('home page', function() {
  it('should have the right title', function () {
    browser.url('http://ci-employee-client.s3-website-us-east-1.amazonaws.com');
    var title = browser.getTitle();
    assert.equal(title, 'Employee Portal');
  });
});
