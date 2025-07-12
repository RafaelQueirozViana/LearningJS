import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


export const deliveryOptions = [
    {
        id: '1',
        deliveryTime: dayjs().add(7, 'days').format('dddd,MMMM D'),
        priceCents: 0,
    },

    {
        id: '3',
        deliveryTime: dayjs().add(4, 'days').format('dddd,MMMM D'),
        priceCents: 499,
    },

    {
        id: '1',
        deliveryTime: dayjs().add(3, 'days').format('dddd,MMMM D'),
        priceCents: 999,
    }

]

