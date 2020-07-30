import { $, ElementFinder, browser, ExpectedConditions, ElementArrayFinder, $$ } from 'protractor';

export class ProductListPage {
  private productList: ElementFinder;
  private products: ElementArrayFinder;
  constructor () {
    this.productList = $('a.button.ajax_add_to_cart_button.btn.btn-default');
    this.products = $$('product-container');
  }

  public async selectAProduct(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.productList), 3000);
    await this.productList.click();
  }

  private findByProduct(productName: string) {
    return this.products.filter(product =>
      product.$('.product-name').getText().then((actualProduct) => {
        return actualProduct === productName;
      })
    ).first();
  }

  public selectProduct (productName: string) {
    const productSearched = this.findByProduct(productName);
    productSearched.$('[itemprop="image"').click();
  }
}
