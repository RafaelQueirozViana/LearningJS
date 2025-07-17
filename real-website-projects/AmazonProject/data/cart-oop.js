import { products, getProduct } from '../data/products.js';
import { getDelivery } from '../data/delivery.js';

export const cart = {
    cartItems: JSON.parse(localStorage.getItem('cart-oop')) || [],

    saveToStorage() {
        localStorage.setItem('cart-oop', JSON.stringify(this.cartItems));
    },

    addToCart(productId, quantityValue) { // Method for add a product to the cart
        const existingProduct = this.cartItems.find(product => product.id === productId);



        // it was used for verify if the cart has the same product as you want to add to cart

        if (!existingProduct) {
            this.cartItems.push({
                id: productId, // i just utilized only id and quantity attributes, because from the id i can search the all others attributes
                quantity: quantityValue,
                deliveryOptionId: '1'
            });

        }

        else {
            existingProduct.quantity += quantityValue;
        }

        this.saveToStorage();

    },

    removeFromCart(productId) { // method to remove a product of the cart
        const newCart = this.cartItems.filter(product => product.id !== productId);
        this.cartItems = newCart;
        this.saveToStorage()
    },

    showCartQuantityText() { // this method shows the quantity of product has in the cart
        const totalItems = this.cartItems.reduce((acumulator, currentProduct) => acumulator + currentProduct.quantity, 0);
        const cartQuantity = document.querySelectorAll(`.js-cart-quantity`);
        cartQuantity.forEach(quantityText => {
            quantityText.textContent = totalItems;
        })
    },

    updateCartQuantity(productId, actuallyQuantity) { // method for change the selected quantity of the product
        const changedProduct = this.cartItems.find(product => product.id === productId);
        changedProduct.quantity = actuallyQuantity;
        this.saveToStorage()
    },

    changeDeliveryOption(productId, newDeliveryId) {
        const cartProduct = this.cartItems.find(cartItem => cartItem.id === productId);
        cartProduct.deliveryOptionId = newDeliveryId;

        this.saveToStorage();

    },

    calculateCartTotals() {
        const taxPercentage = 0.1;
        const paymentSummary = {
            totalItemsPrice: 0,
            totalShipping: 0,
            totalBeforeTax: 0,
            totalTax: 0,
            orderTotal: 0,
        }

        this.cartItems.forEach(cartProduct => {
            const product = getProduct(cartProduct.id)
            const deliveryProperties = getDelivery(cartProduct.deliveryOptionId);
            paymentSummary.totalItemsPrice += product.priceCents * cartProduct.quantity;
            paymentSummary.totalShipping += deliveryProperties.priceCents;

        });
        paymentSummary.totalBeforeTax = paymentSummary.totalItemsPrice + paymentSummary.totalShipping;
        paymentSummary.totalTax = paymentSummary.totalBeforeTax * taxPercentage;
        paymentSummary.orderTotal = paymentSummary.totalBeforeTax + paymentSummary.totalTax;

        return paymentSummary;

    },


    resetCart() {
        const resetedCart = []
        localStorage.setItem('cart-oop', JSON.stringify(resetedCart));
    },
};


cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', '2');


console.log(cart)
// there is all cart methods. It doesn't include html changes




















