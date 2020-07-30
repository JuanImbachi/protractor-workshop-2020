import { $, ElementFinder } from 'protractor';

export class PaymentStep {
  private paymentOpt: ElementFinder;

  constructor () {
    this.paymentOpt = $('[title="Pay by bank wire"]');
  }

  public async proceedToPayment(): Promise<void> {
    await this.paymentOpt.click();
  }
}
