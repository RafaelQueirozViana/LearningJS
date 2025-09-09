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
                name: productDetails.name,
                priceCents: productDetails.priceCents,
                image: productDetails.image,
                quantity: quantityChosen,
            });
        }

        this.#saveToStorage();

    }



};

export const amazonCart = new Cart();

