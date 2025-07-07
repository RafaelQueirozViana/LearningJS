import { cart } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from '../scripts/utils/money.js';

const gridContainer = document.querySelector('.js-order-summary');

const loadProducts = () => {
  gridContainer.innerHTML = '';

  cart.forEach(cartProduct => {
    const productProperties = products.find(product => product.id === cartProduct.id); // finding the all properties of the cart product using the ID in the products array
    gridContainer.innerHTML += `
           <div class="cart-item-container">
          <div class="delivery-date">
            Delivery date: Tuesday, June 21
          </div>

          <div class="cart-item-details-grid">
            <img class="product-image" src="${productProperties.image}">

            <div class="cart-item-details">
              <div class="product-name">
                Black and Gray Athletic Cotton Socks - 6 Pairs
              </div>
              <div class="product-price">
                ${formatCurrency(productProperties.priceCents)}
              </div>
              <div class="product-quantity">
                <span>
                  Quantity: <span class="quantity-label">${cartProduct.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                  Update
                </span>
                <span class="delete-quantity-link link-primary">
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
}


loadProducts()