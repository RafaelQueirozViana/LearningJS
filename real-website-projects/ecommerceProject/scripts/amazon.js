import { amazonProducts } from '../data/products.js';
import { formatCurrency } from '../scripts/utils/money.js'
import { amazonCart } from '../data/cart.js';

const loadAmazonPage = async () => {
  await amazonProducts.loadProducts();

  const loadProductsHtml = (productsArray) => {
    const productsGrid = document.querySelector('.products-grid');

    productsGrid.innerHTML = '';

    productsArray.forEach(currentProduct => {
      productsGrid.innerHTML += `<div class="product-container" data-product-id="${currentProduct.id}">
        <div class="product-image-container">
          <img class="product-image" src="${currentProduct.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${currentProduct.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars" src="images/ratings/rating-45.png">
          <div class="product-rating-count link-primary">
            ${currentProduct.rating.count}
          </div>
        </div>

        <div class="product-price">
          ${formatCurrency(currentProduct.priceCents)}
        </div>

        <div class="product-quantity-container">
          <select class="js-select-quantity">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart">
          Add to Cart
        </button>
      </div>`
    });



  };

  const addEventToButtons = () => {
    document.querySelectorAll('.js-add-to-cart').forEach((button, position) => {
      button.addEventListener('click', () => {
        const elementContainer = button.closest('.product-container')
        const productId = elementContainer.dataset.productId;
        const messageGrid = document.querySelectorAll('.added-to-cart')[position];
        const quantitySelected = Number(document.querySelectorAll('.js-select-quantity')[position].value);

        amazonCart.addToCart(productId, quantitySelected);
        messageGrid.classList.toggle('active');
        updateCartQuantity(amazonCart.calculateTotalItems());


      });
    });
  }

  const updateCartQuantity = (quantity) => {
    document.querySelector('.cart-quantity').textContent = quantity;
  }

  loadProductsHtml(amazonProducts.products);
  addEventToButtons();
  updateCartQuantity(amazonCart.calculateTotalItems());

}
loadAmazonPage();

