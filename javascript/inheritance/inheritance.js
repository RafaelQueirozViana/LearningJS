// Inheritance in javascript is a feature to create a subclasse of some class

// It's useful to make things like create a variation of determinated item like a product

// However, we can create a subclass of the product, like the product type (for example clothing, electronic);

// To create this, we can write:

class Product {
    constructor(productDetails) {
        this.id = productDetails.id;
        this.name = productDetails.name;
    }
}

class Clothing extends Product {
    constructor(productDetails) { // here we should spend the required value of the main class, in this case the ProductDetails
        this.size = productDetails.size;
    }
};