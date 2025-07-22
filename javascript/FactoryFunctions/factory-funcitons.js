const product = ({ name, id }) => {
    return { name: name, id: id };
};

const product1 = product({ name: 'pen', id: '2222' });
const product2 = product({ name: 'scissors', id: '1111' });


const productsArray = [product1, product2];

console.log(productsArray);