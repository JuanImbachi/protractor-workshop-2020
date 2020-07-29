import { $, ElementFinder } from 'protractor';

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  constructor () {
    // this.tShirtMenu = $('#block_top_menu > ul > li:nth-child(3) > a');
    // Each type 'a' element in this block of code has a specific value for the title property,
    // so I changed the selector to use the property like it was an ID.
    this.tShirtMenu = $('#block_top_menu > ul > li > a[title="T-shirts"]');
  }

  public async goToTShirtMenu(): Promise<void> {
    await this.tShirtMenu.click();
  }
}
