import { protractor, browser, element, by } from 'protractor';

export class Page {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getElementByCSS(cssString) {
    return element(by.css(cssString));
  }

  getElementByIdentifier(idString) {
    return element(by.id(idString));
  }

  getElementByTagName(tagString) {
    return element(by.tagName(tagString));
  }

  waitForElementToAppear(css, id) {
    let el = id != null ? element(by.id(id)) : element(by.css(css))
    browser.wait(protractor.ExpectedConditions.presenceOf(el), 5000);
  }
}