import { products, loadProducts } from '../data/products.js';
import { renderOrderSummary } from './checkout/orderSummary.js';

import { amazonCart } from '../data/cart.js';
import { addToHistory } from '../data/ordersHistory.js';
import { getTodayDate } from '../data/delivery.js';


Promise.all([
    loadProducts(),
    amazonCart.loadCart()
]).then(() => renderOrderSummary())




