import { $, ElementFinder } from 'protractor';

export class AddressStep {
  private checkoutBtn: ElementFinder;

  constructor () {
    this.checkoutBtn = $('#center_column > form > p > button > span');
  }

  public async goToCheckout(): Promise<void> {
    await this.checkoutBtn.click();
  }
}
