import { formatCurrency } from '../scripts/utils/money.js';

export let products = [];

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


export async function loadProducts() {
  const response = await fetch('https://supersimplebackend.dev/products');
  const productsData = await response.json();

  products = productsData.map(product => {
    if (product.type == 'clothing') {
      return new Clothing(product);
    }

    else {
      return new Product(product);

    }


  })





}






export const getProduct = (productId) => {
  return products.find(currentProduct => currentProduct.id === productId);
};