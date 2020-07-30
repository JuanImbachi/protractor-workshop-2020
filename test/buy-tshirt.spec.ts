import { browser } from 'protractor';
import {
  MenuContentPage, ProductAddedModalPage, AddressStep, BankPaymentPage,
  OrderSummaryPage, PaymentStep, ProductListPage, ShippingStep, SignInStep, SummaryStep
} from '../src/page';

describe('Should open the shopping page', () => {

  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('and select the t-shirt to buy', () => {

    beforeAll(async () => {

      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
      const summaryStep: SummaryStep = new SummaryStep();

      await menuContentPage.goToTShirtMenu();
      await productListPage.selectProduct('Faded Short Sleeve T-shirts');
      await productAddedModalPage.addProductToCart();
      await summaryStep.goToCheckout();

    });

    describe('and login in the application', () => {

      beforeAll(async () => {

        const signInStep: SignInStep = new SignInStep();

        await signInStep.goToSignIn();

      });

      describe('and select the default address', () => {

        beforeAll(async () => {

          const addressStep: AddressStep = new AddressStep();
          const shippingStep: ShippingStep = new ShippingStep();

          await addressStep.goToCheckout();
          await shippingStep.acceptAndCheckout();

        });

        describe('and make the payment to the bank', () => {

          beforeAll(async () => {

            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
            const paymentStep: PaymentStep = new PaymentStep();

            await paymentStep.proceedToPayment();
            await bankPaymentPage.goToConfirmOrder();

          });

          it('then the order should be completed ', async () => {
            const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

            await expect(orderSummaryPage.titleExpected())
              .toBe('Your order on My Store is complete.');
          });

        });

      });

    });

  });

});
