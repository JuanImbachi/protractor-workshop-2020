import { $, ElementFinder, browser, ExpectedConditions,  } from 'protractor';

export class ProductAddedModalPage {
  private addToCart: ElementFinder;

  constructor () {
    // this.addToCart = $('[style*="display: block;"] .button-container > a');
    // I preferred to use the id of a div instead of use the value of a property like 'style'.
    // I consider is easier to identify the element with the ID of the div and the class name
    // where the button is.
    this.addToCart = $('#layer_cart .button-container');
  }

  public async addProductToCart(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCart), 3000);
    await this.addToCart.click();
  }
}
