import { getProduct } from '../../data/products.js';
import { amazonCart } from '../../data/cart.js';
import { getDelivery, getTodayDate } from '../../data/delivery.js';
import { formatCurrency } from '../utils/money.js';
import { addToHistory, orderHistory } from '../../data/ordersHistory.js';

export const renderPaymentSummary = () => {
    amazonCart.calculateCartTotals();

    document.querySelector('.js-total-items').textContent = formatCurrency(amazonCart.calculateCartTotals().totalItemsPrice);
    document.querySelector('.js-total-shipping').textContent = formatCurrency(amazonCart.calculateCartTotals().totalShipping);
    document.querySelector('.js-before-tax').textContent = formatCurrency(amazonCart.calculateCartTotals().totalBeforeTax);
    document.querySelector('.js-tax').textContent = formatCurrency(amazonCart.calculateCartTotals().totalTax);
    document.querySelector('.js-order-total').textContent = formatCurrency(amazonCart.calculateCartTotals().orderTotal);

    const purchaseButton = document.querySelector('.js-pucharse-button');

    purchaseButton.addEventListener('click', () => {
        console.log('ss')
        // const totalPrice = amazonCart.calculateCartTotals().orderTotal;
        // addToHistory({ orderPlaced: getTodayDate(), totalPriceCents: totalPrice, productsArray: amazonCart.cartItems });
        // console.log(orderHistory)
        // amazonCart.resetCart();
    });


};

