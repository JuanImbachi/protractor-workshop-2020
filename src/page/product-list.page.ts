import { browser, ExpectedConditions, ElementArrayFinder, $$ } from 'protractor';

export class ProductListPage {
  private products: ElementArrayFinder;
  constructor () {
    this.products = $$('.product-container');
  }

  private findByProduct(productName: string) {
    return this.products.filter(product =>
      product.$('.product-name').getText().then((actualProduct) => {
        return actualProduct === productName;
      }
      )
    ).first();
  }

  public async selectProduct (productName: string) {
    const productSearched = this.findByProduct(productName);
    await browser.wait(ExpectedConditions.elementToBeClickable(productSearched), 3000);
    // await productSearched.$('[itemprop="image"]').click();
    await productSearched.$('.ajax_add_to_cart_button.btn.btn-default').click();
  }
}
