import { cart, removeFromCart, showCartQuantityText, updateCartQuantity } from '../data/cart.js';

import { products } from '../data/products.js';
import { deliveryOptions } from '../data/delivery.js';
import { formatCurrency } from '../scripts/utils/money.js';

const gridContainer = document.querySelector('.js-order-summary');

const loadProducts = () => { // loading products of the cart array
  gridContainer.innerHTML = '';

  cart.forEach(cartProduct => {
    const productProperties = products.find(product => product.id === cartProduct.id); // finding the all properties of the current cart product using the ID in the products array
    gridContainer.innerHTML += `
           <div class="cart-item-container js-cart-item-id-${cartProduct.id}">
          <div class="delivery-date">
            Delivery date: Tuesday, June 21
          </div>

          <div class="cart-item-details-grid">
            <img class="product-image" src="${productProperties.image}">

            <div class="cart-item-details">
              <div class="product-name">
                ${productProperties.name}
              </div>
              <div class="product-price">
                ${formatCurrency(productProperties.priceCents) * cartProduct.quantity}
              </div>
              <div class="product-quantity">
                <span>
                  Quantity: <span class="quantity-label">${cartProduct.quantity}</span>
                </span>
                  <span class="update-container">
                  <span class="update-quantity-link link-primary js-update-button" data-product-id="${cartProduct.id}"> Update</span>
                  <div class="update-box hidden">
                    <input type="number">
                    <span class="link-primary js-save-button" data-product-id="${cartProduct.id}">Save</span>
                  </div>

                </span>
                <span class="delete-quantity-link link-primary js-delete-button" data-product-id="${cartProduct.id}">
                  Delete
                </span>
              </div>
            </div>

            <div class="delivery-options">
              <div class="delivery-options-title">
                Choose a delivery option:
              </div>
              <div class="delivery-option">
                <input type="radio" checked class="delivery-option-input" name="delivery-option-1">
                <div>
                  <div class="delivery-option-date">
                    Tuesday, June 21
                  </div>
                  <div class="delivery-option-price">
                    FREE Shipping
                  </div>
                </div>
              </div>
              <div class="delivery-option">
                <input type="radio" class="delivery-option-input" name="delivery-option-1">
                <div>
                  <div class="delivery-option-date">
                    Wednesday, June 15
                  </div>
                  <div class="delivery-option-price">
                    $4.99 - Shipping
                  </div>
                </div>
              </div>
              <div class="delivery-option">
                <input type="radio" class="delivery-option-input" name="delivery-option-1">
                <div>
                  <div class="delivery-option-date">
                    Monday, June 13
                  </div>
                  <div class="delivery-option-price">
                    $9.99 - Shipping
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`
  });
};

loadProducts();
showCartQuantityText()

const deleteButtons = document.querySelectorAll('.js-delete-button'); // method that add event listener to the delete button

deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId; // getting the product id for find the corresponding product of the html
    const productContainer = document.querySelector(`.js-cart-item-id-${productId}`);
    productContainer.remove();

    removeFromCart(productId);
    showCartQuantityText()

    //this function will delete the product when the user clicks in the delete button





  });
});

const updateButtons = document.querySelectorAll('.js-update-button');

updateButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    const productContainer = document.querySelector(`.js-cart-item-id-${productId}`);
    const quantityBox = productContainer.querySelector('.update-box');

    button.classList.add('hidden');
    quantityBox.classList.remove('hidden');

    // This function allows the user change the quantity of the product in the cart. It will hidden the button when click and will show the quantity box

  });
});

// const today = dayjs();
// const deliveryDate = today.add(7, 'days');
// const formatedText = deliveryDate.format('dddd,MMMM D');
// console.log(formatedText);

console.log(deliveryOptions);



const saveButtons = document.querySelectorAll('.js-save-button');

saveButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    const productContainer = document.querySelector(`.js-cart-item-id-${productId}`);
    const quantityBox = productContainer.querySelector('.update-box');
    const updateButton = productContainer.querySelector('.js-update-button');
    const inputValue = Number(quantityBox.querySelector('input').value);
    const quantityText = productContainer.querySelector('.quantity-label');


    if (inputValue > 0 && inputValue <= 1000) {
      quantityBox.classList.add('hidden');
      updateButton.classList.remove('hidden');
      updateCartQuantity(productId, inputValue);
      quantityText.textContent = inputValue;

    }

    else if (inputValue < 0) {
      productContainer.remove();
      removeFromCart(productId);
    }

    else {
      console.log('inside a value between 0 and 1000');
    }


    showCartQuantityText()

    //this function is the next part of the previous function. when click in save it will call the updateCartQuantity() in the cart.js. 



  });
});


