import { $, ElementFinder, browser, ExpectedConditions,  } from 'protractor';

export class ProductAddedModalPage {
  private addToCart: ElementFinder;

  constructor () {
    // this.addToCart = $('[style*="display: block;"] .button-container > a');
    // The value of the title property is unique in the view.
    // So, makes easier to find the element.
    this.addToCart = $('a[title="Proceed to checkout"]');
  }

  public async addProductToCart(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCart), 3000);
    await this.addToCart.click();
  }
}
