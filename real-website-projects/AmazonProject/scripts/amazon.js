import { products } from '../data/products.js';
import { cart, addToCart, showCartQuantityText } from '../data/cart.js';

const productGrid = document.querySelector('.js-all-products');
const cartNumberText = document.querySelector('.js-cart-quantity');



const addedCartAnim = (productContainer) => {
  const addedMessage = productContainer.querySelector('.added-to-cart');

  addedMessage.classList.add('show');
};

const loadProducts = () => {
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
            <img class="${product.image}"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
           $ ${(product.priceCents / 100).toFixed(2)}
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

          <button data-product-id="${product.id}" class="add-to-cart-button button-primary js-add-to-cart" >
            Add to Cart
          </button>
        </div>`;

    productGrid.innerHTML += html;
  });

};

loadProducts();
showCartQuantityText()


const addCartButtons = document.querySelectorAll('.js-add-to-cart');

addCartButtons.forEach((button) => { // this is add to cart buttons, it will call the addToCart method when receive click
  button.addEventListener('click', () => {

    const productId = button.dataset.productId;
    const productContainer = button.parentElement;
    addToCart(productId, productContainer);
    showCartQuantityText()
    addedCartAnim(productContainer);

  });
});



















// import { cart, addToCart } from '../data/cart.js'; // Data of all products in Cart
// import { products } from '../data/products.js'; // Data of all Products in the website


// const productGrid = document.querySelector('.js-all-products');
// const cartText = document.querySelector('.js-cart-quantity');

// const showCartQuantity = () => {
//   const sumCartProducts = cart.reduce((acumulator, cartItem) => acumulator += cartItem.quantity, 0);
//   cartText.textContent = sumCartProducts;
// }

// const loadProducts = () => {
//   showCartQuantity()
//   productGrid.innerHTML = '';
//   products.forEach((product) => {

//     const html = ` <div class="product-container">
//           <div class="product-image-container">
//             <img class="product-image"
//               src="${product.image}">
//           </div>

//           <div class="product-name limit-text-to-2-lines">
//             ${product.name}
//           </div>

//           <div class="product-rating-container">
//             <img class="${product.image}"
//               src="images/ratings/rating-${product.rating.stars * 10}.png">
//             <div class="product-rating-count link-primary">
//               ${product.rating.count}
//             </div>
//           </div>

//           <div class="product-price">
//            $ ${(product.priceCents / 100).toFixed(2)}
//           </div>

//           <div class="product-quantity-container">
//             <select class="js-quantity-selector">
//               <option selected value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="5">5</option>
//               <option value="6">6</option>
//               <option value="7">7</option>
//               <option value="8">8</option>
//               <option value="9">9</option>
//               <option value="10">10</option>
//             </select>
//           </div>

//           <div class="product-spacer"></div>

//           <div class="added-to-cart js-add-message">
//             <img src="images/icons/checkmark.png">
//             Added
//           </div>

//           <button class="add-to-cart-button button-primary js-add-to-cart">
//             Add to Cart
//           </button>
//         </div>`;

//     productGrid.innerHTML += html;
//   });

//   // Creating the EventListener in the all buttons that we are creating

//   const buttons = document.querySelectorAll('.js-add-to-cart');

//   buttons.forEach((button, index) => {
//     const addedCartMessage = document.querySelectorAll('.js-add-message')[index];

//     button.addEventListener('click', () => {
//       addToCart(index)
//       showCartQuantity()

//       addedCartMessage.style.opacity = 1;

//       setTimeout(() => {
//         addedCartMessage.style.opacity = 0;

//       }, 2000)

//     });
//   });

// };

// loadProducts()

