import { formatCurrency } from '../scripts/utils/money.js';

class Product {
  id;
  name;
  image;
  rating;
  priceCents;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.name = productDetails.name;
    this.image = productDetails.image;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }

  getStarsImage = () => `images/ratings/rating-${this.rating.stars * 10}.png`;

  getProductPrice = () => `$${formatCurrency(this.priceCents)}`

  extraInfoHtml = () => {
    return '';
  }

};

class Clothing extends Product {
  constructor(productDetails) {
    super(productDetails);
    this.sizeImg = productDetails.sizeChartLink;
  };

  extraInfoHtml = () => {
    return `<a href="${this.sizeImg}" target="_blank">Size chart</a>`;
  }
};

export let products = [];

export function loadProducts(fun) {

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    products = JSON.parse(xhr.response).map(productDetails => {
      if (productDetails.type === "clothing") {
        return new Clothing(productDetails);
      }

      else {
        return new Product(productDetails);

      };
    })
    fun();
    console.log(products);
  });

  xhr.open('GET', 'https://supersimplebackend.dev/products');
  xhr.send();

};


export const getProduct = (productId) => {
  return products.find(currentProduct => currentProduct.id === productId);
};