import { getProduct } from '../../data/products.js';
import { amazonCart } from '../../data/cart.js';
import { getDelivery, getTodayDate } from '../../data/delivery.js';
import { formatCurrency } from '../utils/money.js';
import { userOrder } from '../../data/ordersHistory.js';

export const renderPaymentSummary = () => {
    amazonCart.calculateCartTotals();

    document.querySelector('.js-total-items').textContent = formatCurrency(amazonCart.calculateCartTotals().totalItemsPrice);
    document.querySelector('.js-total-shipping').textContent = formatCurrency(amazonCart.calculateCartTotals().totalShipping);
    document.querySelector('.js-before-tax').textContent = formatCurrency(amazonCart.calculateCartTotals().totalBeforeTax);
    document.querySelector('.js-tax').textContent = formatCurrency(amazonCart.calculateCartTotals().totalTax);
    document.querySelector('.js-order-total').textContent = formatCurrency(amazonCart.calculateCartTotals().orderTotal);

    const purchaseButton = document.querySelector('.js-pucharse-button');

    purchaseButton.addEventListener('click', async () => {

        try {
            const httpPost = await fetch('https://supersimplebackend.dev/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cart: amazonCart.cartItems })
            });

            const response = await httpPost.json();
            userOrder.addOrder(response);
            window.location.href = 'orders.html';
        }

        catch (error) {
            console.log(error)
        }





    });


};


