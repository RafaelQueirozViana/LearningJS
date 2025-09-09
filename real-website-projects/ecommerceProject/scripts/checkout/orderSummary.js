import { amazonCart } from '../../data/cart.js';
import { formatCurrency } from '../utils/money.js';
import { amazonProducts } from '../../data/products.js';

const onlyHere = 'test'

const ordersGrid = document.querySelector('.order-summary');

const loadProductsHtml = () => {
  ordersGrid.innerHTML = '';

  amazonCart.cartItems.forEach(cartProduct => {
    const productDetails = amazonProducts.getProduct(cartProduct.id);
    ordersGrid.innerHTML += `
             <div class="cart-item-container">
            <div class="delivery-date">
              Delivery date: Wednesday, June 15
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${productDetails.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${productDetails.name}
                </div>
                <div class="product-price">
                 $${formatCurrency(productDetails.priceCents)}
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
                  <input type="radio" class="delivery-option-input"
                    name="delivery-option-2">
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
                  <input type="radio" checked class="delivery-option-input"
                    name="delivery-option-2">
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
                  <input type="radio" class="delivery-option-input"
                    name="delivery-option-2">
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
          </div>
        `
  });


};



export const loadOrderSummary = () => {
  loadProductsHtml();




}







