import { $, ElementFinder } from 'protractor';

export class AddressStep {
  private checkoutBtn: ElementFinder;

  constructor () {
    this.checkoutBtn = $('[name="processAddress"]');
  }

  public async goToCheckout(): Promise<void> {
    await this.checkoutBtn.click();
  }
}
