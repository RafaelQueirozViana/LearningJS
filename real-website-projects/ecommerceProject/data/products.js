class ProductsController {
  constructor() {
    this.products = [];
  }

  async loadProducts() {
    const response = await fetch('https://supersimplebackend.dev/products');
    this.products = await response.json();

  }
}

export const amazonProducts = new ProductsController();




