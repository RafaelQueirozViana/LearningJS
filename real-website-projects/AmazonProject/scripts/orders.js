import { userOrder } from '../data/ordersHistory.js';
import { formatCurrency } from './utils/money.js';
import { loadProducts, getProduct } from '../data/products.js';

const loadOrdersGrid = () => {
  console.log(userOrder)

  const container = document.querySelector('.orders-grid');

  let totalHtml = '';
  userOrder.orders.forEach(currentOrder => {
    let productHtml = '';

    currentOrder.products.forEach(product => {
      const productDetails = getProduct(product.productId);

      productHtml += `<div class="order-details-grid">
          <div class="product-image-container">
            <img src="${productDetails.image}">
          </div>

          <div class="product-details">
            <div class="product-name">
              ${productDetails.name}
            </div>
            <div class="product-delivery-date">
              Arriving on: June 17
            </div>
            <div class="product-quantity">
              Quantity: ${product.quantity}
            </div>
            <button class="buy-again-button button-primary">
              <img class="buy-again-icon" src="images/icons/buy-again.png">
              <span class="buy-again-message">Buy it again</span>
            </button>
          </div>

          <div class="product-actions">
            <a href="tracking.html">
              <button class="track-package-button button-secondary">
                Track package
              </button>
            </a>
          </div>
        </div>`;
    });

    totalHtml += `
         <div class="order-container">  
          <div class="order-header">
          <div class="order-header-left-section">
            <div class="order-date">
              <div class="order-header-label">Order Placed:</div>
              <div>August 12</div>
            </div>
            <div class="order-total">
              <div class="order-header-label">Total:</div>
              <div>$${formatCurrency(currentOrder.totalPriceCents)}</div>
            </div>
          </div>

          <div class="order-header-right-section">
            <div class="order-header-label">Order ID:</div>
            <div>${currentOrder.orderId}</div>
          </div>
        </div>
         ${productHtml}
          </div>`

  });


  container.innerHTML = totalHtml;

};




async function loadOrdersPage() {
  await loadProducts();

  loadOrdersGrid()
}

loadOrdersPage()



