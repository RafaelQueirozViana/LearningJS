import { products, getProduct } from '../data/products.js';
import { getDelivery } from '../data/delivery.js';


export let cart = JSON.parse(localStorage.getItem('cart')) || [];

// there is all cart methods. It doesn't include html changes

const saveToStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const addToCart = (productId, desiredQuantity) => { // Method for add a product to the cart
    const existingProduct = cart.find(product => product.id === productId);

    // it was used for verify if the cart has the same product as you want to add to cart

    if (!existingProduct) {
        cart.push({
            id: productId, // i just utilized only id and quantity attributes, because from the id i can search the all others attributes
            quantity: desiredQuantity,
            deliveryOptionId: '1'
        });

    }

    else {
        existingProduct.quantity += desiredQuantity;
    }

    saveToStorage()





};

export const removeFromCart = (productId) => { // method to remove a product of the cart
    const newCart = cart.filter(product => product.id !== productId);
    cart = newCart;
    saveToStorage()
}

export const showCartQuantityText = () => { // this method shows the quantity of product has in the cart
    const totalItems = cart.reduce((acumulator, currentProduct) => acumulator + currentProduct.quantity, 0);
    const cartQuantity = document.querySelectorAll(`.js-cart-quantity`);
    cartQuantity.forEach(quantityText => {
        quantityText.textContent = totalItems;
    })
};

export const updateCartQuantity = (productId, actuallyQuantity) => { // method for change the selected quantity of the product
    const changedProduct = cart.find(product => product.id === productId);
    changedProduct.quantity = actuallyQuantity;
    saveToStorage()
};


export const changeDeliveryOption = (productId, newDeliveryId) => {
    const cartProduct = cart.find(cartItem => cartItem.id === productId);
    cartProduct.deliveryOptionId = newDeliveryId;

    saveToStorage();

};

export const calculateCartTotals = () => {
    const taxPercentage = 0.1;
    const paymentSummary = {
        totalItemsPrice: 0,
        totalShipping: 0,
        totalBeforeTax: 0,
        totalTax: 0,
        orderTotal: 0,
    }

    cart.forEach(cartProduct => {
        const product = getProduct(cartProduct.id)
        const deliveryProperties = getDelivery(cartProduct.deliveryOptionId);
        paymentSummary.totalItemsPrice += product.priceCents * cartProduct.quantity;
        paymentSummary.totalShipping += deliveryProperties.priceCents;

    });
    paymentSummary.totalBeforeTax = paymentSummary.totalItemsPrice + paymentSummary.totalShipping;
    paymentSummary.totalTax = paymentSummary.totalBeforeTax * taxPercentage;
    paymentSummary.orderTotal = paymentSummary.totalBeforeTax + paymentSummary.totalTax;

    return paymentSummary;

}

export const resetCart = () => {
    const resetedCart = []
    localStorage.setItem('cart', JSON.stringify(resetedCart));
};

export const loadCart = () => {
    const promisse = fetch('https://supersimplebackend.dev/cart').then((response) => response.text()).then((data) => console.log(data));
    return promisse;
}













