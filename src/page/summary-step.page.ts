import { $, ElementFinder } from 'protractor';

export class SummaryStep {
  private checkoutBtn: ElementFinder;

  constructor () {
    // I will let this selector in the same way because
    // is a simple and usefull way to find the element
    this.checkoutBtn = $('.cart_navigation span');
  }

  public async goToCheckout(): Promise<void> {
    await this.checkoutBtn.click();
  }
}
