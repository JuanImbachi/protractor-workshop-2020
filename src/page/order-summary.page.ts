import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private expectedElement: ElementFinder;

  constructor () {
    this.expectedElement = $('#center_column > div > p > strong');
  }

  public async titleExpected(): Promise<String> {
    const title = await this.expectedElement.getText();
    return title;
  }
}
