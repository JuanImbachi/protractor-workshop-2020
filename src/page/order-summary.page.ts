import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private expectedElement: ElementFinder;

  constructor () {
   // this.expectedElement = $('#center_column > div > p > strong');
   // The class where the title appear is unique in the view, so with it we can identify
   // the element easily.
    this.expectedElement = $('.cheque-indent');
  }

  public async titleExpected(): Promise<String> {
    const title = await this.expectedElement.getText();
    return title;
  }
}
