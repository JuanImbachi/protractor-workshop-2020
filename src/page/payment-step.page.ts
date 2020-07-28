import { $, ElementFinder } from 'protractor';

export class PaymentStep {
  private paymentOpt: ElementFinder;

  constructor () {
    this.paymentOpt = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async proceedToPayment(): Promise<void> {
    await this.paymentOpt.click();
  }
}
