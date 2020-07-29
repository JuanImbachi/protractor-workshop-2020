import { $, ElementFinder } from 'protractor';

export class ShippingStep {
  private acceptTermsCheck: ElementFinder;
  private checkoutBtn: ElementFinder;

  constructor () {
    // This selector is the same because is already using the ID
    this.acceptTermsCheck = $('#cgv');
    // this.checkoutBtn = $('#form > p > button > span');
    // This selector changed because  whit the name of the button is enough to find the element.
    this.checkoutBtn = $('[name="processCarrier"]');
  }

  public async acceptAndCheckout(): Promise<void> {
    await this.acceptTermsCheck.click();
    await this.checkoutBtn.click();
  }
}
