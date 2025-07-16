import { orderHistory } from '../data/ordersHistory.js';
import { formatCurrency } from './utils/money.js';

const container = document.querySelector('.orders-grid');

let totalHtml = '';

console.log(orderHistory)

orderHistory.forEach(order => {
    let productHtml = '';
    order.purchasedProducts.forEach(product => {
        productHtml += `   <div class="product-image-container">
            <img src="images/products/athletic-cotton-socks-6-pairs.jpg">
          </div>

          <div class="product-details">
            <div class="product-name">
              Black and Gray Athletic Cotton Socks - 6 Pairs
            </div>
            <div class="product-delivery-date">
              Arriving on: August 15
            </div>
            <div class="product-quantity">
              Quantity: 1
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
          </div>`;
    });

    totalHtml += `
         <div class="order-details-grid">  
         ${productHtml}
          </div>`

});



console.log(totalHtml)

container.innerHTML = totalHtml