import { formatCurrency } from "../utils/money.js";
import { amazonCart } from "../../data/cart.js";

export const renderPaymentSummary = () => {
    const paymentSummary = amazonCart.getCartSummary();


    const itemsPriceText = document.querySelector('.items-price-js');
    const shippingPriceText = document.querySelector('.shipping-price-js');
    const beforeTaxText = document.querySelector('.before-tax-price-js');
    const totalTaxText = document.querySelector('.tax-price-js');
    const orderTotal = document.querySelector('.order-total-price-js');

    itemsPriceText.textContent = `$${formatCurrency(paymentSummary.getItemsPrice)}`;
    shippingPriceText.textContent = `$${formatCurrency(paymentSummary.getShippingCents)}`
    beforeTaxText.textContent = `$${formatCurrency(paymentSummary.getTotalBefTax)}`
    totalTaxText.textContent = `$${formatCurrency(paymentSummary.getTax)}`
    orderTotal.textContent = `$${formatCurrency(paymentSummary.getOrderTotal)} `


}