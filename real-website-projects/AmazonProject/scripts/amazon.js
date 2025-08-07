import { products, loadProducts } from '../data/products.js';
import { cart, addToCart, showCartQuantityText } from '../data/cart.js';

const loadProductsGrid = () => {

  const productGrid = document.querySelector('.js-all-products');
  const cartNumberText = document.querySelector('.js-cart-quantity');

  const addedCartAnim = (productContainer) => {
    const addedMessage = productContainer.querySelector('.added-to-cart');
    addedMessage.classList.add('show');
  };

  productGrid.innerHTML = '';
  products.forEach(product => {

    const html = ` <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src=${product.getStarsImage()}>
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
           ${product.getProductPrice()}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector">
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
          ${product.extraInfoHtml()}

          <div class="product-spacer"></div>

      <div class="added-to-cart js-add-message">
        <img src="images/icons/checkmark.png">
          Added
      </div>

      <button data-product-id="${product.id}" class="add-to-cart-button button-primary js-add-to-cart" >
        Add to Cart
      </button>
    </div > `;

    productGrid.innerHTML += html;
  });

  const addCartButtons = document.querySelectorAll('.js-add-to-cart');

  addCartButtons.forEach((button) => { // this is add to cart buttons, it will call the addToCart method when receive click
    button.addEventListener('click', () => {

      const productId = button.dataset.productId;
      const productContainer = button.parentElement;

      const quantitySelector = productContainer.querySelector('.js-quantity-selector');
      const quantityValue = Number(quantitySelector.value);


      addToCart(productId, quantityValue);
      showCartQuantityText()
      addedCartAnim(productContainer);

    });
  });

  showCartQuantityText()


};


loadProducts().then(loadProductsGrid);






