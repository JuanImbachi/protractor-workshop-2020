import { $, ElementFinder } from 'protractor';

export class PaymentStep {
  private confirmOrder: ElementFinder;
  private expectedElement: ElementFinder;

  constructor () {
    this.confirmOrder = $('#cart_navigation > button > span');
    this.expectedElement = $('#center_column > div > p > strong');
  }

  public async goToConfirmOrder(): Promise<void> {
    await this.confirmOrder.click();
  }

  public async orderComplete(): Promise<void> {
    await expect(this.expectedElement.getText())
      .toBe('Your order on My Store is complete.');
  }
}
