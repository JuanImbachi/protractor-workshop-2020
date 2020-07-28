import { browser } from 'protractor';
import { MenuContentPage, ProductAddedModalPage, AddressStep, BankPaymentPage,
   OrderSummaryPage, PaymentStep, ProductListPage, ShippingStep, SignInStep, SummaryStep } from '../src/page';

describe('Buy a t-shirt', () => {

  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const addressStep: AddressStep = new AddressStep();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const paymentStep: PaymentStep = new PaymentStep();
  const productListPage: ProductListPage = new ProductListPage();
  const shippingStep: ShippingStep = new ShippingStep();
  const signInStep: SignInStep = new SignInStep();
  const summaryStep: SummaryStep = new SummaryStep();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await productListPage.selectAProduct();
    await productAddedModalPage.addProductToCart();
    await summaryStep.goToCheckout();

    await signInStep.goToSignIn();

    await addressStep.goToCheckout();

    await shippingStep.acceptTerms();

    await shippingStep.goToCheckOut();
    await paymentStep.proceedToPayment();
    await bankPaymentPage.goToConfirmOrder();

    await expect(orderSummaryPage.titleExpected())
      .toBe('Your order on My Store is complete.');
  });
});
