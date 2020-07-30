import { $, ElementFinder } from 'protractor';

export class ShippingStep {
  private acceptTermsCheck: ElementFinder;
  private checkoutBtn: ElementFinder;

  constructor () {
    this.acceptTermsCheck = $('#cgv');
    this.checkoutBtn = $('[name="processCarrier"]');
  }

  public async acceptAndCheckout(): Promise<void> {
    await this.acceptTermsCheck.click();
    await this.checkoutBtn.click();
  }
}
