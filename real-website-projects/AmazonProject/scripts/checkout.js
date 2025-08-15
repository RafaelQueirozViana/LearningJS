import { products, loadProducts } from '../data/products.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { amazonCart } from '../data/cart.js';



async function loadCheckoutPage() {
    try {
        await loadProducts();
        renderOrderSummary();
        

    }

    catch (error) {
        console.log(`your code has the error: ${error}`);
    }



}


loadCheckoutPage()




