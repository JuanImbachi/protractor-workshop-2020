import { ElementFinder, element, by, browser, ExpectedConditions, $ } from 'protractor';

export class PersonalInformationPage {
  private firstNameField: ElementFinder;
  private lastNameField: ElementFinder;
  private sexChkBox: ElementFinder;
  private experienceChkBox: ElementFinder;
  private professionChkbox: ElementFinder;
  private toolsChkBox: ElementFinder;
  private continentCmBox: ElementFinder;
  private commandsCmBox: ElementFinder;
  private submitBtn: ElementFinder;
  private pageTitle: ElementFinder;
  private timeout: number;
  constructor () {
    this.firstNameField = element(by.name('firstname'));
    this.lastNameField = element(by.name('lastname'));
    this.submitBtn = element(by.name('submit'));
    this.pageTitle = element(by.cssContainingText('h1', 'Selenium - Automation Practice Form'));
    this.timeout = 5000;
  }

  public async submit(userData) {
    await this.fillForm(userData);
    await this.submitBtn.click();

    browser.wait(ExpectedConditions.alertIsPresent(), this.timeout);
    await browser.switchTo().alert().accept();
  }

  public async getActualPageTitle(): Promise<string> {
    await browser.wait(ExpectedConditions.visibilityOf(this.pageTitle), this.timeout);
    return this.pageTitle.getText();
  }

  private async fillForm(userData): Promise<void> {

    browser.wait(ExpectedConditions.visibilityOf(this.firstNameField), this.timeout);
    await this.firstNameField.sendKeys(userData.firstName);
    await this.lastNameField.sendKeys(userData.lastName);

    this.sexChkBox = $(`input[name="sex"][value="${userData.sex}"]`);
    await this.sexChkBox.click();

    this.experienceChkBox = $(`input[name="exp"][value="${userData.experience}"]`);
    await this.experienceChkBox.click();

    for (const prof of userData.profession) {
      this.professionChkbox = $(`input[name="profession"][value="${prof}"]`);
      await this.professionChkbox.click();
    }

    for (const tool of userData.tools) {
      this.toolsChkBox = $(`input[name="tool"][value="${tool}"]`);
      await this.toolsChkBox.click();
    }

    this.continentCmBox = $('select[name="continents"]')
      .element(by.cssContainingText('option', userData.continent));

    await this.continentCmBox.click();

    for (const command of userData.commands) {
      this.commandsCmBox = $('select[name="selenium_commands"]')
        .element(by.cssContainingText('option', command));

      await this.commandsCmBox.click();
    }
  }
}
