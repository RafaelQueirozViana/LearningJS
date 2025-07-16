import { products } from '../data/products.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { cart } from '../data/cart.js';
import { addToHistory } from '../data/ordersHistory.js';


renderOrderSummary();

const purchaseButton = document.querySelector('.js-pucharse-button');

const totalPriceCents = cart.reduce((acumulator, cartProduct) => {
    acumulator += cartProduct.priceCents
});

purchaseButton.addEventListener('click', () => {
    addToHistory({});
});



