class ProductsController {
  constructor() {
    this.products = [];
  }

  async loadProducts() {
    const response = await fetch('https://supersimplebackend.dev/products');
    this.products = await response.json();

  }

  getProduct(productId) {
    return this.products.find(product => product.id === productId);
  }
}

export const amazonProducts = new ProductsController();




