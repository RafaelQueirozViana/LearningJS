import { products } from '../data/products.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { cart, calculateCartTotals, removeFromCart } from '../data/cart.js';
import { addToHistory } from '../data/ordersHistory.js';
import { getTodayDate } from '../data/delivery.js';


renderOrderSummary();

const purchaseButton = document.querySelector('.js-pucharse-button');

const totalPrice = calculateCartTotals().orderTotal;



purchaseButton.addEventListener('click', () => {
    addToHistory({ orderPlaced: getTodayDate(), totalPriceCents: totalPrice, productsArray: cart });
    
});



