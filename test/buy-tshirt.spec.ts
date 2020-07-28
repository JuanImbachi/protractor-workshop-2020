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
    await(browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.selectAProduct();
    await(browser.sleep(3000));
    await productAddedModalPage.addProductToCart();
    await(browser.sleep(3000));
    await summaryStep.goToCheckout();
    await(browser.sleep(3000));

    await signInStep.goToSignIn();
    await(browser.sleep(3000));

    await addressStep.goToCheckout();
    await(browser.sleep(3000));

    await shippingStep.acceptTerms();
    await(browser.sleep(3000));

    await shippingStep.goToCheckOut();
    await(browser.sleep(3000));
    await orderSummaryPage.goToBankPayment();
    await(browser.sleep(3000));
    await bankPaymentPage.goToConfirmOrder();
    await(browser.sleep(3000));

    await paymentStep.orderComplete();
  });
});
