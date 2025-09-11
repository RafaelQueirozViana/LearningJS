import { amazonProducts } from '../data/products.js';

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
        return this.cartItems.reduce((acumulator, currentValue) => acumulator += currentValue.quantity, 0)

    }







};

export const amazonCart = new Cart();


