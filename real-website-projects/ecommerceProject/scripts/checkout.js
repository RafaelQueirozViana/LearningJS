import { amazonProducts } from "../data/products.js";
import { loadOrderSummary } from './checkout/orderSummary.js';

const loadCheckoutPage = async () => {
    await amazonProducts.loadProducts();

    loadOrderSummary()
};

loadCheckoutPage()