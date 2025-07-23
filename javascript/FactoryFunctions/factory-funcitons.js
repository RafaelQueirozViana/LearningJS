const product = ({ name, id }) => {
    return { name: name, id: id };
};

const product1 = product({ name: 'pen', id: '2222' });
const product2 = product({ name: 'scissors', id: '1111' });


const productsArray = [product1, product2];


// Creating the same code but as a class 

class Product {
    constructor({ name, id }) {
        this.name = name;
        this.id = id;
    };

    #calculateName() {
        console.log('execultou')
        return this.name + 'test'
    };



    showName() {
        console.log(`your name is ${this.name}, the calculate will be ${this.#calculateName()}`);
    };
};

const product3 = new Product({ name: 'glue', id: '44444' });
const product4 = new Product({ name: 'computer', id: '55555' });






const productsArray2 = [product3, product4];






