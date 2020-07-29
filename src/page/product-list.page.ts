import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductListPage {
  private productList: ElementFinder;

  constructor () {
  // The class of the element we want to click on is so specific
  // that we can use it to identify the element on the whole page.
    this.productList = $('a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async selectAProduct(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.productList), 3000);
    await this.productList.click();
  }
}
