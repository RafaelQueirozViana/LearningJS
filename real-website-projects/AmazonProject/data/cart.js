import { products } from '../data/products.js';
export let cart = JSON.parse(localStorage.getItem('cart')) || [];

console.log(cart);

export const addToCart = (productId) => {
    const existingProduct = cart.find(product => product.id === productId);

    // it was used for verify if the cart has the same product as you want to add to cart

    if (!existingProduct) {
        cart.push({
            id: productId,
            quantity: 1,
        });  // i just utilized only id and quantity attributes, because from the id i can search the all others attributes

    }

    else {
        existingProduct.quantity += 1;
    }

    localStorage.setItem('cart', JSON.stringify(cart));





};

export const removeFromCart = (productId) => {
    const newCart = cart.filter(product => product.id !== productId);
    cart = newCart;

    localStorage.setItem('cart', JSON.stringify(cart));
}

export const updateCartQuantity = () => {
    const totalItems = cart.reduce((acumulator, currentProduct) => acumulator + currentProduct.quantity, 0);
    console.log(totalItems)
    document.querySelector(`.js-cart-quantity`).textContent = totalItems;
};
















// export const addToCart = (productIndex) => {

//     const currentProduct = products[productIndex];
//     const selectQuantityBtn = document.querySelectorAll('.js-quantity-selector');
//     const Selectedquantity = Number(selectQuantityBtn[productIndex].value);


//     let matchingItem = cart.find(cartItem => cartItem.id === currentProduct.id);

//     if (!matchingItem) {
//         cart.push({
//             name: currentProduct.name,
//             price: currentProduct.priceCents,
//             image: currentProduct.image,
//             quantity: Selectedquantity,
//             id: currentProduct.id
//         });
//     }

//     else {
//         matchingItem.quantity += Selectedquantity;
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));



// }


