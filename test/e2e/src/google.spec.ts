import {browser, element, by, By, $, $$, ExpectedConditions} from 'aurelia-protractor-plugin/protractor';

describe('Google Tests', function() {
  it("asserts page title is 'Google'", () => {
    browser.get("http://google.com");
    expect(browser.getTitle()).toEqual("Google");
  });
});
