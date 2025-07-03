import { products } from '../data/products.js';
export const cart = JSON.parse(localStorage.getItem('cart')) || [];


export const addToCart = (productIndex) => {
    const currentProduct = products[productIndex];
    const ProductId = currentProduct.id;

    const quantitySelector = document.querySelectorAll('.js-quantity-selector')[productIndex];
    const quantity = Number(quantitySelector.value);


    const productAlreadyInCart = cart.find(product => product.id === ProductId);

    if (!productAlreadyInCart) {
        cart.push({
            id: currentProduct.id,
            name: currentProduct.name,
            image: currentProduct.image,
            priceCents: currentProduct.priceCents,
            quantity: quantity,
        });

    }

    else {
        productAlreadyInCart.quantity += quantity;
    }

    console.log(cart);

    localStorage.setItem('cart', JSON.stringify(cart));





};

export const removeFromCart = (productIndex) => {
    cart.splice(productIndex, 1);
    console.log(cart);
}















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


