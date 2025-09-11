import { amazonProducts } from '../data/products.js';
import { amazonDelivery } from './delivery.js';

class Cart {
    constructor() {
        this.cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    };

    #saveToStorage() {
        localStorage.setItem('cart', JSON.stringify(this.cartItems));

    };

    addToCart(productId, quantityChosen) {
        const productDetails = amazonProducts.getProduct(productId);

        const productIsInCart = this.cartItems.find(product => product.id === productDetails.id);

        if (productIsInCart) {
            productIsInCart.quantity += quantityChosen;
        }

        else {
            this.cartItems.push({
                id: productDetails.id,
                priceCents: productDetails.priceCents,
                quantity: quantityChosen,
                deliveryOptionId: 1,
            });
        }

        this.#saveToStorage();

    }




    changeDeliveryOption(productId, newDeliveryId) {
        const matchingProduct = this.cartItems.find(cartItem => cartItem.id === productId);
        matchingProduct.deliveryOptionId = newDeliveryId;
        console.log(matchingProduct.deliveryOptionId);
        this.#saveToStorage();
        console.log(this.cartItems)
    }

    calculateTotalItems() {
        const taxPercentage = 0.1;
        const paymentSummary = {
            getItemsQuantity: 0,
            getTotalShipping: 0,
            totalBeforeTax: 0,
            totalTax: 0,
            orderTotal: 0,
        }

        paymentSummary.getItemsQuantity = this.cartItems.reduce((acumulator, cartItem) => acumulator += cartItem.quantity, 0);
        paymentSummary.getTotalShipping = this.cartItems.reduce((acumulator, cartItem) => {
            const matchingDelivery = amazonDelivery.deliveryOptions.find(option => option.id === cartItem.deliveryOptionId);
            return acumulator += matchingDelivery.priceCents;
        }, 0);
        paymentSummary.getTotalBefTax = this.cartItems.reduce((acumulator, cartItem) => acumulator += cartItem.priceCents, 0);

        return paymentSummary



    };







};

export const amazonCart = new Cart();


