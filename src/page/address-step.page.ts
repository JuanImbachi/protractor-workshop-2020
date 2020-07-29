import { $, ElementFinder } from 'protractor';

export class AddressStep {
  private checkoutBtn: ElementFinder;

  constructor () {
   // this.checkoutBtn = $('#center_column > form > p > button > span');
   // The name of the element is unique in the view, so it makes easier to identify the button.
    this.checkoutBtn = $('[name="processAddress"]');
  }

  public async goToCheckout(): Promise<void> {
    await this.checkoutBtn.click();
  }
}
