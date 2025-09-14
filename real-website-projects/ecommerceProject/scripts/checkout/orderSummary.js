import { amazonCart } from '../../data/cart.js';
import { amazonProducts } from '../../data/products.js';
import { amazonDelivery } from '../../data/delivery.js';
import { formatCurrency } from '../utils/money.js';
import { renderPaymentSummary } from './paymentSummary.js';



export const renderOrderSummary = () => {


  const generateDeliveryHtml = (matchingProduct) => {
    let deliveryHtml = '';

    amazonDelivery.deliveryOptions.forEach(deliveryOption => {
      const deliveryPrice = deliveryOption.priceCents > 0 ? `$${formatCurrency(deliveryOption.priceCents)} - ` : 'FREE';
      const isChecked = deliveryOption.id == matchingProduct.deliveryOptionId ? 'CHECKED' : '';

      deliveryHtml += ` <div class="delivery-option">
                <input ${isChecked} type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}" data-delivery-id="${deliveryOption.id}">
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
    const ordersGrid = document.querySelector('.order-summary');
    ordersGrid.innerHTML = '';

    amazonCart.cartItems.forEach(cartProduct => {
      const productDetails = amazonProducts.getProduct(cartProduct.id);
      ordersGrid.innerHTML += `
             <div class="cart-item-container" data-product-id="${productDetails.id}">
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
                    <input type="number" class="quantity-input hidden">

                  </span>
                  <span class="update-quantity-link link-primary js-update-button">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-item">
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
        const elementParent = inputBtn.closest('.cart-item-container');
        const productId = elementParent.dataset.productId;
        const deliveryId = Number(inputBtn.dataset.deliveryId);

        amazonCart.changeDeliveryOption(productId, deliveryId);
        renderOrderSummary()
      });
    });

    document.querySelectorAll('.js-update-button').forEach(button => {
      const elementParent = button.closest('.cart-item-container');
      const inputContainer = elementParent.querySelector('.quantity-input');
      const deleteContainer = elementParent.querySelector('.js-delete-item');
      const productId = elementParent.dataset.productId;


      button.addEventListener('click', () => {

        if (button.classList.contains('js-update-button')) {
          inputContainer.classList.remove('hidden');
          deleteContainer.classList.add('hidden');
          button.classList.replace('js-update-button', 'js-save-quantity');
          button.textContent = 'Save'
        }

        else if (button.classList.contains('js-save-quantity')) {
          const inputValue = Number(inputContainer.value);

          amazonCart.updateCartQuantity({ productId: productId, newQuantity: inputValue });
          renderOrderSummary();

        }


      });



    });



  };

  generateProductsHtml();
  addEventToButtons();
  renderPaymentSummary();




};





