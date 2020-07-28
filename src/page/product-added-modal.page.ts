import { $, ElementFinder, browser, ExpectedConditions,  } from 'protractor';

export class ProductAddedModalPage {
  private addToCart: ElementFinder;

  constructor () {
    this.addToCart = $('[style*="display: block;"] .button-container > a');
  }

  public async addProductToCart(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCart), 3000);
    await this.addToCart.click();
  }
}
