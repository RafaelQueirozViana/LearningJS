export const cart = JSON.parse(localStorage.getItem('cart')) || [];

export const addToCart = (productIndex) => {

    const currentProduct = products[productIndex];
    const selectQuantityBtn = document.querySelectorAll('.js-quantity-selector');
    const Selectedquantity = Number(selectQuantityBtn[productIndex].value);
    const addedCartMessage = document.querySelectorAll('.js-add-message')[productIndex];

    let matchingItem = cart.find(cartItem => cartItem.id === currentProduct.id);

    if (!matchingItem) {
        cart.push({
            name: currentProduct.name,
            price: currentProduct.priceCents,
            image: currentProduct.image,
            quantity: Selectedquantity,
            id: currentProduct.id
        });
    }

    else {
        matchingItem.quantity += Selectedquantity;
    }

    localStorage.setItem('cart', JSON.stringify(cart));


    addedCartMessage.style.opacity = 1;

    setTimeout(() => {
        addedCartMessage.style.opacity = 0;

    }, 2000)

}

