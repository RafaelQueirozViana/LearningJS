import { cart } from '../data/cart.js'; // Data of all products in Cart  
import { products } from '../data/products.js'; // Data of all Products  


const productGrid = document.querySelector('.js-all-products');
const cartText = document.querySelector('.js-cart-quantity');

const showCartQuantity = () => {
  const sumCartProducts = cart.reduce((acumulator, product) => acumulator += product.quantity, 0);
  cartText.textContent = sumCartProducts;
}

const addToCart = (productIndex) => {

  const currentProduct = products[productIndex];
  const selectQuantityBtn = document.querySelectorAll('.js-quantity-selector');
  const Selectedquantity = Number(selectQuantityBtn[productIndex].value);
  const addedCartMessage = document.querySelectorAll('.js-add-message')[productIndex];

  let matchingItem = cart.find(cartProduct => cartProduct.id === currentProduct.id);

  if (!matchingItem) {
    cart.push({
      name: currentProduct.name,
      price: currentProduct.priceCents,
      image: currentProduct.image,
      quantity: Selectedquantity,
      id: currentProduct.id
    });
  }

  else {
    matchingItem.quantity += Selectedquantity;
  }

  localStorage.setItem('cart', JSON.stringify(cart));


  addedCartMessage.style.opacity = 1;

  setTimeout(() => {
    addedCartMessage.style.opacity = 0;

  }, 2000)

}

const loadProducts = () => {
  showCartQuantity()
  productGrid.innerHTML = '';
  products.forEach((product) => {

    const html = ` <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="${product.image}"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
           $ ${(product.priceCents) / 100}
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

          <div class="product-spacer"></div>

          <div class="added-to-cart js-add-message">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart">
            Add to Cart
          </button>
        </div>`;

    productGrid.innerHTML += html;
  });

  const buttons = document.querySelectorAll('.js-add-to-cart');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      addToCart(index)
      showCartQuantity()

    });
  });

};

loadProducts()

