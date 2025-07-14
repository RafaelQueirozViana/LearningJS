import { cart, removeFromCart, showCartQuantityText, updateCartQuantity, changeDeliveryOption } from '../../data/cart.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

import { products } from '../../data/products.js';
import { formatCurrency } from '../utils/money.js';
import { deliveryOptions, calculateDeliveryTime } from '../../data/delivery.js';

const gridContainer = document.querySelector('.js-order-summary');


export const renderOrderSummary = () => { // loading all the initial html with all of event listeners based on data 
    gridContainer.innerHTML = '';

    const generateDeliveryHtml = (productId, productDeliveryOption) => {

        let html = '';

        deliveryOptions.forEach(deliveryOption => {
            const today = dayjs();
            const estimatedShipping = calculateDeliveryTime(deliveryOption.deliveryTime);
            const priceString = deliveryOption.priceCents == 0 ? 'FREE' : `${formatCurrency(deliveryOption.priceCents)} -`;
            const isChecked = productDeliveryOption == deliveryOption.id ? 'checked' : '';


            html += `
  <div class="delivery-option">
    <input type="radio" ${isChecked} class="delivery-option-input" name="delivery-option-${productId}" data-product-id="${productId}" data-shipping-id="${deliveryOption.id}">
    <div>
      <div class="delivery-option-date">
      ${estimatedShipping} 
      </div>
      <div class="delivery-option-price">
      ${priceString} Shipping
      </div>
    </div>
  </div>`
        });
        return html
    }

    cart.forEach(cartProduct => {
        const productProperties = products.find(product => product.id === cartProduct.id); // finding the all properties of the current cart product using the ID in the products array

        const deliveryTimeOfProduct = deliveryOptions.find(option => option.id == cartProduct.deliveryOptionId); // returns the delivery time of the product
        const estimatedShipping = calculateDeliveryTime(deliveryTimeOfProduct.deliveryTime);

        gridContainer.innerHTML += `
           <div class="cart-item-container js-cart-item-id-${cartProduct.id}">
          <div class="delivery-date">
            Delivery date: ${estimatedShipping}
          </div>

          <div class="cart-item-details-grid">
            <img class="product-image" src="${productProperties.image}">

            <div class="cart-item-details">
              <div class="product-name">
                ${productProperties.name}
              </div>
              <div class="product-price">
                ${formatCurrency(productProperties.priceCents * cartProduct.quantity)}
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

              ${generateDeliveryHtml(cartProduct.id, cartProduct.deliveryOptionId)}
           
           
            
          
            </div>
          </div>
        </div>`
    });


    document.querySelectorAll('.js-delete-button').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId; // getting the product id for find the corresponding product of the html
            const productContainer = document.querySelector(`.js-cart-item-id-${productId}`);

            removeFromCart(productId);
            showCartQuantityText()
            renderOrderSummary()


            //this function will delete the product when the user clicks in the delete button





        });
    });


    document.querySelectorAll('.js-update-button').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            const productContainer = document.querySelector(`.js-cart-item-id-${productId}`);
            const quantityBox = productContainer.querySelector('.update-box');

            button.classList.add('hidden');
            quantityBox.classList.remove('hidden');


            // This function allows the user change the quantity of the product in the cart. It will hidden the button when click and will show the quantity box

        });
    });


    document.querySelectorAll('.js-save-button').forEach(button => {
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

            else if (inputValue <= 0) {

                removeFromCart(productId);

            }

            else {
                console.log('inside a value between 0 and 1000');
            }

            renderOrderSummary();
            showCartQuantityText()

            //this function is the next part of the previous function. when click in save it will call the updateCartQuantity() in the cart.js. 



        });
    });

    document.querySelectorAll('.delivery-option-input').forEach(optionButton => {
        optionButton.addEventListener('change', () => {
            const { productId, shippingId } = optionButton.dataset

            changeDeliveryOption(productId, shippingId);
            renderOrderSummary()



        });
    });

    //Payment summary  box
    const taxPercentage = 0.1;

    const paymentSummary = {
        totalItemsPrice: 0,
        totalShipping: 0,
        totalBeforeTax: 0,
        totalTax: 0,
        orderTotal: 0,
    }

    const calculateCartTotals = () => {
        cart.forEach(cartProduct => {
            const allProperties = products.find(product => product.id === cartProduct.id);
            const deliveryProperties = deliveryOptions.find(option => option.id === cartProduct.deliveryOptionId);
            paymentSummary.totalItemsPrice += allProperties.priceCents * cartProduct.quantity;
            paymentSummary.totalShipping += deliveryProperties.priceCents;

        });
        paymentSummary.totalBeforeTax = paymentSummary.totalItemsPrice + paymentSummary.totalShipping;
        paymentSummary.totalTax = paymentSummary.totalBeforeTax * taxPercentage;
        paymentSummary.orderTotal = paymentSummary.totalBeforeTax + paymentSummary.totalTax;

    }

    calculateCartTotals();

    console.log(paymentSummary.orderTotal)


    document.querySelector('.js-total-items').textContent = formatCurrency(paymentSummary.totalItemsPrice);
    document.querySelector('.js-total-shipping').textContent = formatCurrency(paymentSummary.totalShipping);
    document.querySelector('.js-before-tax').textContent = formatCurrency(paymentSummary.totalBeforeTax);
    document.querySelector('.js-tax').textContent = formatCurrency(paymentSummary.totalTax);
    document.querySelector('.js-order-total').textContent = formatCurrency(paymentSummary.orderTotal);





}




renderOrderSummary();
showCartQuantityText()
