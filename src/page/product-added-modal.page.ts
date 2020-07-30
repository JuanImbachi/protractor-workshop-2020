import { $, ElementFinder, browser, ExpectedConditions,  } from 'protractor';

export class ProductAddedModalPage {
  private addToCart: ElementFinder;

  constructor () {
    this.addToCart = $('a[title="Proceed to checkout"]');
  }

  public async addProductToCart(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCart), 3000);
    await this.addToCart.click();
  }
}
