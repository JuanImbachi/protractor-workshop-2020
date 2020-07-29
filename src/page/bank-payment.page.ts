import { ElementFinder, element, by } from 'protractor';

export class BankPaymentPage {
  private confirmOrder: ElementFinder;

  constructor () {
    // this.confirmOrder = $('#cart_navigation > button > span');
    // I changed the selector because in the code block of #cart_navigation
    // is only one 'span', so whit those two thing we can identidy the element that we need.
    this.confirmOrder = element(by.cssContainingText('span', 'I confirm my order'));
  }

  public async goToConfirmOrder(): Promise<void> {
    await this.confirmOrder.click();
  }
}
