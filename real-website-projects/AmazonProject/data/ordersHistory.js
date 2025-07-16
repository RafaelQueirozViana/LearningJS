export const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];

export const addToHistory = ({ orderPlaced, totalPriceCents, productsArray }) => {
    const generateRandomId = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
    orderHistory.push({
        orderPlaced: orderPlaced,
        totalPriceCents: totalPriceCents,
        orderId: generateRandomId,
        products: [],
    });
};