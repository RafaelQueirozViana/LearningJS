import { amazonProducts } from "../data/products.js";
import { renderOrderSummary } from './checkout/orderSummary.js';

const loadCheckoutPage = async () => {
    await amazonProducts.loadProducts();

    renderOrderSummary()
};

loadCheckoutPage()