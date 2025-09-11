import { amazonCart } from '../../data/cart.js';
import { amazonProducts } from '../../data/products.js';
import { amazonDelivery } from '../../data/delivery.js';
import { formatCurrency } from '../utils/money.js';


const ordersGrid = document.querySelector('.order-summary');

const renderOrderSummary = () => {
  ordersGrid.innerHTML = '';

  const generateDeliveryHtml = (matchingProduct) => {
    let deliveryHtml = '';

    amazonDelivery.deliveryOptions.forEach(deliveryOption => {
      const deliveryPrice = deliveryOption.priceCents > 0 ? `$${formatCurrency(deliveryOption.priceCents)} - ` : 'FREE';
      const isChecked = deliveryOption.id == matchingProduct.deliveryOptionId ? 'CHECKED' : '';

      deliveryHtml += ` <div class="delivery-option">
                <input ${isChecked} type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}" data-delivery-id="${deliveryOption.id}" data-product-id="${matchingProduct.id}">
                <div>
                  <div class="delivery-option-date">
                    ${amazonDelivery.getShippingDate(deliveryOption.deliveryTime)}
                  </div>
                  <div class="delivery-option-price">
                    ${deliveryPrice}  Shipping
                  </div>
                </div>
              </div>`
    });

    return deliveryHtml;
  }

  const generateProductsHtml = () => {
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

              ${generateDeliveryHtml(cartProduct)}



            </div>
            </div>
          </div>
        `
    });
  }

  const addEventToButtons = () => {
    document.querySelectorAll('.delivery-option-input').forEach(inputBtn => {
      inputBtn.addEventListener('change', () => {
        const productId = inputBtn.dataset.productId;
        const deliveryId = Number(inputBtn.dataset.deliveryId);

        amazonCart.changeDeliveryOption(productId, deliveryId);

      });
    });
  };

  generateProductsHtml();

  addEventToButtons();






};



export const loadOrderSummary = () => {
  renderOrderSummary();




}






