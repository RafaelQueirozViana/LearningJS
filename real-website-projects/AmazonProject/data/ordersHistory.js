import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { products } from "./products.js";

class UserOrders {
    constructor() {
        this.orders;
    }

    ordersDatabase = async () => {
        const httpGet = await fetch('https://supersimplebackend.dev/products');
        const ordersData = await httpGet.json()
        this.orders = ordersData || localStorage.getItem('orders') || []








    }


    addOrder({ products, totalCost }) {
        orders.push({
            orderId: '44444332',
            orderTime: dayjs().format('dddd, MMMM D'),
            products: products,
            totalCost: totalCost,
        });

        localStorage.setItem('orders', JSON.stringify(orders));
    };
}



const nicolasOrder = new UserOrders();
nicolasOrder.ordersDatabase()
console.log(nicolasOrder.orders)
