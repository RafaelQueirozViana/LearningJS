import { getProduct } from '../../data/products.js';
import { cart, calculateCartTotals, resetCart } from '../../data/cart.js';
import { getDelivery, getTodayDate } from '../../data/delivery.js';
import { formatCurrency } from '../utils/money.js';
import { addToHistory } from '../../data/ordersHistory.js';

export const renderPaymentSummary = () => {
    calculateCartTotals();

    document.querySelector('.js-total-items').textContent = formatCurrency(calculateCartTotals().totalItemsPrice);
    document.querySelector('.js-total-shipping').textContent = formatCurrency(calculateCartTotals().totalShipping);
    document.querySelector('.js-before-tax').textContent = formatCurrency(calculateCartTotals().totalBeforeTax);
    document.querySelector('.js-tax').textContent = formatCurrency(calculateCartTotals().totalTax);
    document.querySelector('.js-order-total').textContent = formatCurrency(calculateCartTotals().orderTotal);

    const purchaseButton = document.querySelector('.js-pucharse-button');

    purchaseButton.addEventListener('click', () => {
        const totalPrice = calculateCartTotals().orderTotal;
        console.log(totalPrice);

        addToHistory({ orderPlaced: getTodayDate(), totalPriceCents: totalPrice, productsArray: cart });
        resetCart();
    });


};

