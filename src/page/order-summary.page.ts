import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private checkoutBtn: ElementFinder;

  constructor () {
    this.checkoutBtn = $('#form > p > button > span');
  }

  public async goToCheckout(): Promise<void> {
    await this.checkoutBtn.click();
  }
}
