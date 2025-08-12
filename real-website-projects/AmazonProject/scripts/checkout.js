import { products, loadProducts } from '../data/products.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { amazonCart } from '../data/cart.js';



async function loadCheckoutPage() {
    await loadProducts();
    const cartProducts = await amazonCart.loadCart();

    renderOrderSummary();

}


loadCheckoutPage()




