import { getProduct } from '../../data/products.js';
import { cart } from '../../data/cart.js';
import { getDelivery } from '../../data/delivery.js';
import { formatCurrency } from '../utils/money.js';

export const renderPaymentSummary = () => {
    const taxPercentage = 0.1;

    const paymentSummary = {
        totalItemsPrice: 0,
        totalShipping: 0,
        totalBeforeTax: 0,
        totalTax: 0,
        orderTotal: 0,
    }

    const calculateCartTotals = () => {
        cart.forEach(cartProduct => {
            const product = getProduct(cartProduct.id)
            const deliveryProperties = getDelivery(cartProduct.deliveryOptionId);
            paymentSummary.totalItemsPrice += product.priceCents * cartProduct.quantity;
            paymentSummary.totalShipping += deliveryProperties.priceCents;

        });
        paymentSummary.totalBeforeTax = paymentSummary.totalItemsPrice + paymentSummary.totalShipping;
        paymentSummary.totalTax = paymentSummary.totalBeforeTax * taxPercentage;
        paymentSummary.orderTotal = paymentSummary.totalBeforeTax + paymentSummary.totalTax;

    }

    calculateCartTotals();

    document.querySelector('.js-total-items').textContent = formatCurrency(paymentSummary.totalItemsPrice);
    document.querySelector('.js-total-shipping').textContent = formatCurrency(paymentSummary.totalShipping);
    document.querySelector('.js-before-tax').textContent = formatCurrency(paymentSummary.totalBeforeTax);
    document.querySelector('.js-tax').textContent = formatCurrency(paymentSummary.totalTax);
    document.querySelector('.js-order-total').textContent = formatCurrency(paymentSummary.orderTotal);
};

