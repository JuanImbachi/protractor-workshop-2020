import { $, ElementFinder } from 'protractor';

export class SignInStep {
  private signInBtn: ElementFinder;
  private emailField: ElementFinder;
  private passwordField: ElementFinder;

  constructor () {
    // this.signInBtn = $('#SubmitLogin > span');
    // I will only modify the first selector because with the ID is enough.
    // The email and password selectors will not change because they are already using their IDs.
    this.signInBtn = $('#SubmitLogin');
    this.emailField = $('#email');
    this.passwordField = $('#passwd');
  }

  public async goToSignIn(): Promise<void> {
    await this.emailField.sendKeys('aperdomobo@gmail.com');
    await this.passwordField.sendKeys('WorkshopProtractor');
    await this.signInBtn.click();
  }
}
