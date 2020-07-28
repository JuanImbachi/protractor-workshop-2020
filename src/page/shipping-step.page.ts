import { $, ElementFinder } from 'protractor';

export class ShippingStep {
  private checkCgv: ElementFinder;

  constructor () {
    this.checkCgv = $('#cgv');
  }

  public async check(): Promise<void> {
    await this.checkCgv.click();
  }
}
