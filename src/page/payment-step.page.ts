import { $, ElementFinder } from 'protractor';

export class PaymentStep {
  private paymentOpt: ElementFinder;

  constructor () {
   // this.paymentOpt = $('[#HOOK_PAYMENT > div:nth-child(1) > div > p > a]');
   // This selector changed because whit the value of the title property
   // is enough to find the element.
    this.paymentOpt = $('[title="Pay by bank wire"]');
  }

  public async proceedToPayment(): Promise<void> {
    await this.paymentOpt.click();
  }
}
