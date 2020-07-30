import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private expectedElement: ElementFinder;

  constructor () {
    this.expectedElement = $('.cheque-indent');
  }

  public async titleExpected(): Promise<String> {
    const title = await this.expectedElement.getText();
    return title;
  }
}
