import { Page } from './app.po';
import { browser, protractor, by } from 'protractor';
import { setTimeout } from 'timers';

// NOTE: On the test SQL Server, a job runs every 10 minutes to delete rows 
// with VIN 4S4BP67C254326627. This is so the tests below will perform 
// consistently.

let alertIdString = 'alert-hdr-0';
let alertTitleString = 'Invalid VIN!';
let anchorCSSString = 'div.manual-vin > a';
let appNameString = 'Inventory App';
let backCSSString = '.back';
let backTextCSSString = '.back-text';
let backToHomeString = 'Back to home';
let buttonString = 'button';
let cardCSSString = '.card-content.card-content-md';
let checkInString = 'Check In';
let confirmString = 'Confirm Inventory';
let descString = 'desc';
let enterVINString = 'enterVIN';
let firstButtonCSSString = 'button.item.item-block.item-md:first-child';
let homeDivString = 'homeDiv';
let inputCSSString = '.text-input.text-input-md';
let inventoryIconCSSString = '.inventory-icon';
let launchString = 'LAUNCH SCANNER';
let secondButtonCSSString = 'button.item.item-block.item-md:nth-child(2)';
let testVIN = '4S4BP67C254326627';
let thisVehicleString = 'This vehicle';
let typeVINManuallyString = 'Type VIN Manually';
let typeVINString = 'typeVIN';
let vdetailsString = 'vdetails';
let vehicleDetailsString = 'Vehicle Details';

let scriptSix = (page: Page, short: boolean) => {
  page.getElementByIdentifier(typeVINString).click();
  page.waitForElementToAppear(inputCSSString, null);
  if (short) {
    page.getElementByCSS(inputCSSString).sendKeys(testVIN.substr(1));
  } else {
    page.getElementByCSS(inputCSSString).sendKeys(testVIN);
  }
  page.getElementByIdentifier(enterVINString).click();
  if (!short) {
    page.waitForElementToAppear(null, vdetailsString);
  }
  browser.sleep(1000);
};

describe('App', () => {
  let page: Page;
  
  beforeEach(() => {
    page = new Page();
  });

  describe('Wholesale Inventory App', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

// TESTS WITH NO INPUT

    it('(1) should have a title saying "Inventory App"', () => {
      page.getTitle().then(title => {
        expect(title).toEqual(appNameString);
      });
    });

    it('(2) should have an anchor tag with text of "Type VIN Manually"', () =>{
      page.getElementByCSS(anchorCSSString).getText().then(text => {
        expect(text).toEqual(typeVINManuallyString);
      })
    });

    it('(3) should have a card with text of "LAUNCH SCANNER"', () =>{
      page.getElementByCSS(cardCSSString).getText().then(text => {
        expect(text).toEqual(launchString);
      })
    });

    it('(4) should advance to the manual entry page when "Type VIN Manually" is clicked', () =>{
      page.getElementByIdentifier(typeVINString).click();
      page.waitForElementToAppear(backTextCSSString, null);
      page.getElementByCSS(backCSSString).element(by.css(backTextCSSString)).getText().then(text => {
          expect(text).toEqual(backToHomeString);
      });
    });
    
    it('(5) should return to the home page when "Back to home" is clicked', () =>{
      page.getElementByIdentifier(typeVINString).click();
      page.waitForElementToAppear(backTextCSSString, null);
      page.getElementByCSS(backTextCSSString).click();  
      page.getElementByCSS(anchorCSSString).getText().then(text => {
          expect(text).toEqual(typeVINManuallyString);
      });
    });

// TESTS WITH INPUT  

    it('(6) should display an alert when an invalid VIN is entered and "ENTER VIN" is clicked', () =>{
      scriptSix(page, true);
      page.getElementByIdentifier(alertIdString).getText().then(text => {
          expect(text).toEqual(alertTitleString);}
      );
    });

    it('(7) should advance to the actions page when a VIN is entered and "ENTER VIN" is clicked', () =>{
      scriptSix(page, false);
      page.getElementByIdentifier(vdetailsString).getText().then(text => {
          expect(text).toEqual(vehicleDetailsString);}
      );
    });

    it('(8) should display a single action ("Check In") on the actions page when a VIN is entered and "ENTER VIN" is clicked', () =>{
      scriptSix(page, false);
      page.getElementByCSS(firstButtonCSSString).getText().then(text => {
          expect((text.trimRight()).trimLeft()).toEqual(checkInString);}
      );
    });

    it('(9) should advance to the confirmation page from the vehicle details page when "Check In" is clicked', () =>{
      scriptSix(page, false);
      page.getElementByTagName(buttonString).click();
      page.waitForElementToAppear(inventoryIconCSSString, null);
      // page.getElementByCSS(inventoryIconCSSString).isDisplayed().then(tf => {
      //   expect(tf).toEqual(true);}
      // );
    });

    it('(10) should display action ("Confirm Inventory") on the actions page when a VIN is entered a 2nd time and "ENTER VIN" is clicked', () =>{
      scriptSix(page, false);
      page.getElementByCSS(firstButtonCSSString).getText().then(text => {
          expect((text.trimRight()).trimLeft()).toEqual(confirmString);}
      );
    });

    it('(11) should return to the home page from the vehicle details page when "Home" is clicked', () =>{
      scriptSix(page, false);
      page.getElementByIdentifier(homeDivString).click();
      page.waitForElementToAppear(null, typeVINString);
      page.getElementByIdentifier(typeVINString).getText().then(text => {
          expect(text).toEqual(typeVINManuallyString);}
      );
    });

    it('(12) should advance to the confirmation page from the vehicle details page when "Confirm Inventory" is clicked', () =>{
      scriptSix(page, false);
      page.getElementByCSS(firstButtonCSSString).click();
      page.waitForElementToAppear(null, descString);
      // page.getElementByIdentifier(descString).getText().then(text => {
      //   expect(text).toContain(thisVehicleString);}
      // );
    });

    it('(13) should advance to the confirmation page from the vehicle details page when "Check Out" is clicked', () =>{
      scriptSix(page, false);
      page.getElementByCSS(secondButtonCSSString).click();
      page.waitForElementToAppear(null, descString);
      // page.getElementByIdentifier(descString).getText().then(text => {
      //   expect(text).toContain(thisVehicleString);}
      // );
    });

    it('(14) should display a single action ("Check In") on the actions page when a VIN is entered and "ENTER VIN" is clicked', () =>{
      scriptSix(page, false);
      page.getElementByCSS(firstButtonCSSString).getText().then(text => {
          expect((text.trimRight()).trimLeft()).toEqual(checkInString);}
      );
    });

  });
});
