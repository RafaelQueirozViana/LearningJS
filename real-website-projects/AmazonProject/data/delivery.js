import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';



export const deliveryOptions = [
    {
        id: '1',
        deliveryTime: 7,
        priceCents: 0,
    },

    {
        id: '2',
        deliveryTime: 3,
        priceCents: 499,
    },

    {
        id: '3',
        deliveryTime: 1,
        priceCents: 999,
    }

];

export const getDelivery = (deliveryId) => {
    return deliveryOptions.find(delivery => delivery.id === deliveryId);
};

export const getEstimatedDeliveryDate = (deliveryTime) => {
    const today = dayjs();
    return today.add(deliveryTime, 'days').format('dddd, MMMM D');
}

export const getTodayDate = () => {
    const today = dayjs()
    return today.format('MMMM D');
};



// dayjs().add(1, 'days').format('dddd,MMMM D')

