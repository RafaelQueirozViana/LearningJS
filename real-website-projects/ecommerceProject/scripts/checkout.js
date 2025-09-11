import { amazonProducts } from "../data/products.js";
import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js'

const loadCheckoutPage = async () => {
    await amazonProducts.loadProducts();

    renderOrderSummary();
    renderPaymentSummary();
};

loadCheckoutPage();