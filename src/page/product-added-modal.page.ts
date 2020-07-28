import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private addToCart: ElementFinder;

  constructor () {
    this.addToCart = $('[style*="display: block;"] .button-container > a');
  }

  public async addProductToCart(): Promise<void> {
    await this.addToCart.click();
  }
}
