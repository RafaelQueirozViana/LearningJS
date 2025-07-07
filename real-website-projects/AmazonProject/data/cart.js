import { products } from '../data/products.js';
export const cart = JSON.parse(localStorage.getItem('cart')) || [];


export const addToCart = (productId, container) => {
    const existingProduct = products.find(product => product.id === productId);

    const quantitySelector = container.querySelectorAll('.js-quantity-selector');
    const quantity = Number(quantitySelector.value);

    if (!existingProduct) {
        cart.push({
            id: currentProduct.id,
            name: currentProduct.name,
            image: currentProduct.image,
            priceCents: currentProduct.priceCents,
            quantity: quantity,
        });

    }

    else {
        existingProduct.quantity += quantity;
    }

    localStorage.setItem('cart', JSON.stringify(cart));





};

export const removeFromCart = (productIndex) => {
    console.log('startou')
    cart.splice(productIndex, 1);

    console.log(cart)
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


