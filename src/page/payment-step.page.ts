import { $, ElementFinder } from 'protractor';

export class PaymentStep {
  private expectedElement: ElementFinder;

  constructor () {
    this.expectedElement = $('#center_column > div > p > strong');
  }

  public async orderComplete(): Promise<void> {
    await expect(this.expectedElement.getText())
      .toBe('Your order on My Store is complete.');
  }
}
