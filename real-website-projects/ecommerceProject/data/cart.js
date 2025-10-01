import { amazonProducts } from '../data/products.js';
import { amazonDelivery } from './delivery.js';

class Cart {
    constructor() {
        this.cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    };

    #saveToStorage() {
        localStorage.setItem('cart', JSON.stringify(this.cartItems));

    };

    findInCart(productId) {
        const cartItem = this.cartItems.find(cartItem => cartItem.id === productId);
        return cartItem
    }

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
        const matchingProduct = this.findInCart(productId);
        matchingProduct.deliveryOptionId = newDeliveryId;
        console.log(matchingProduct.deliveryOptionId);
        this.#saveToStorage();
        console.log(this.cartItems)
    }

    getCartSummary() {
        const taxPercentage = 0.1;
        const paymentSummary = {
            getCartQuantity: 0,
            getItemsPrice: 0,
            getShippingCents: 0,
            getTotalBefTax: 0,
            getTax: 0,
            getOrderTotal: 0,
        }

        paymentSummary.getCartQuantity = this.cartItems.reduce((acumulator, cartItem) => acumulator += cartItem.quantity, 0);
        paymentSummary.getItemsPrice = this.cartItems.reduce((acumulator, cartItem) => acumulator += (cartItem.priceCents * cartItem.quantity), 0)
        paymentSummary.getShippingCents = this.cartItems.reduce((acumulator, cartItem) => {
            const matchingDelivery = amazonDelivery.deliveryOptions.find(option => option.id === cartItem.deliveryOptionId);
            return acumulator += matchingDelivery.priceCents;
        }, 0);
        paymentSummary.getTotalBefTax = paymentSummary.getItemsPrice + paymentSummary.getShippingCents;
        paymentSummary.getTax = paymentSummary.getTotalBefTax * taxPercentage;
        paymentSummary.getOrderTotal = paymentSummary.getTotalBefTax + paymentSummary.getTax;


        return paymentSummary;
    };

    updateCartQuantity({ productId, newQuantity }) {
        const matchingProduct = this.findInCart(productId);
        matchingProduct.quantity = newQuantity;
        this.#saveToStorage();
    };

};

console.log(amazonCart.findInCart(22323234))

export const amazonCart = new Cart();
amazonCart.getCartSummary();


console.log(amazonCart.getCartSummary()
)

console.log(amazonCart.updateCartQuantity()
)

console.log('hello test')

