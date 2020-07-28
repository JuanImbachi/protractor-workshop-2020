import { $, ElementFinder } from 'protractor';

export class SignInStep {
  private signInBtn: ElementFinder;
  private emailField: ElementFinder;
  private passwordField: ElementFinder;

  constructor () {
    this.signInBtn = $('#SubmitLogin > span');
    this.emailField = $('#email');
    this.passwordField = $('#passwd');
  }

  public async goToSignIn(): Promise<void> {
    await this.emailField.sendKeys('aperdomobo@gmail.com');
    await this.passwordField.sendKeys('WorkshopProtractor');
    await this.signInBtn.click();
  }
}
