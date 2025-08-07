const loadProductsFetch = () => {
    fetch('https://supersimplebackend.dev/products').then((response) => {
        return response.json()
    }).then((products) => console.log(products))

};

loadProductsFetch()