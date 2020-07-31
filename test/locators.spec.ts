import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Given a web page of automation', () => {
  beforeAll(async () => {
    await browser.get('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm');
  });
  describe('and a web form', async () => {
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
    const userData = {
      firstName: 'Alejandro',
      lastName: 'Perdomo',
      sex: 'Male',
      experience: 7,
      profession: ['Automation Tester'],
      tools: ['Selenium Webdriver'],
      continent: 'South America',
      commands: [
        'Browser Commands',
        'Navigation Commands',
        'Switch Commands',
        'Wait Commands',
        'WebElement Commands'],
    };

    beforeAll(async () => {
      await personalInformationPage.submit(userData);
    });

    it('then the form should have been completed and the alert accepted', async () => {
      await expect(personalInformationPage.getActualPageTitle()).toEqual('Selenium - Automation Practice Form');
    });
  });
});
