import {browser, element, by, By, $, $$, ExpectedConditions} from 'aurelia-protractor-plugin/protractor';

describe('Yahoo Tests', function() {
  it("asserts page title is 'Yahoo'", () => {
    browser.get("http://yahoo.com");
    expect(browser.getTitle()).toEqual("Yahoo");
  });
});
