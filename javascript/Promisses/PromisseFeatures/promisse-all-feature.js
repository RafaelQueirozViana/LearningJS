

const loginUser = () => {
    return new Promise((resolve, reject) => {
        const user = new XMLHttpRequest();

        user.addEventListener('load', () => {
            console.log('user logged')
            resolve('rodrigo');
        });

        user.open('GET', 'https://supersimplebackend.dev/cart');
        user.send();

    });
};

const getUserVideos = (username) => {
    return new Promise((resolve, reject) => {
        console.log(`the user ${username} has 2 videos`);
        resolve()
    });
};

const loadCart = () => {
    return new Promise((resolve) => {

        const xhr = new XMLHttpRequest();

        xhr.addEventListener('load', () => {
            resolve(xhr.response);
            console.log(xhr.response)
        });

        xhr.open('GET', 'https://supersimplebackend.dev/cart');
        xhr.send();

    })
};


Promise.all([loginUser(), loadCart()]).then(() => getUserVideos())


