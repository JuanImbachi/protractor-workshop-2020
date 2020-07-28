import { $, ElementFinder } from 'protractor';

export class SummaryStep {
  private checkoutBtn: ElementFinder;

  constructor () {
    this.checkoutBtn = $('.cart_navigation span');
  }

  public async goToCheckout(): Promise<void> {
    await this.checkoutBtn.click();
  }
}
