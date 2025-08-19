import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'; //importing

class AmazonOrders { // created the class
    constructor() {
        this.orders = JSON.parse(localStorage.getItem('userOrders')) || [];
    }

    addOrder(details) {
        this.orders.push(details);
        localStorage.setItem('userOrders', JSON.stringify(this.orders));
    };
};

export const userOrder = new AmazonOrders(); // create a new object to orders


