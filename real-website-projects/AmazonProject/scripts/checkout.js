import { products } from '../data/products.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { cart, calculateCartTotals, resetCart } from '../data/cart.js';
import { addToHistory } from '../data/ordersHistory.js';
import { getTodayDate } from '../data/delivery.js';


renderOrderSummary();

const purchaseButton = document.querySelector('.js-pucharse-button');




purchaseButton.addEventListener('click', () => {
    const totalPrice = calculateCartTotals().orderTotal;

    addToHistory({ orderPlaced: getTodayDate(), totalPriceCents: totalPrice, productsArray: cart });
    resetCart();
});



