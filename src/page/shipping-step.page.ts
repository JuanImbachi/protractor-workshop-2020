import { $, ElementFinder } from 'protractor';

export class ShippingStep {
  private checkCgv: ElementFinder;
  private checkoutBtn: ElementFinder;

  constructor () {
    this.checkCgv = $('#cgv');
    this.checkoutBtn = $('#form > p > button > span');
  }

  public async acceptTerms(): Promise<void> {
    await this.checkCgv.click();
  }

  public async goToCheckOut(): Promise<void> {
    await this.checkoutBtn.click();
  }
}
