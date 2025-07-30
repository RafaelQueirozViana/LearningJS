

const loginUser = (email, age, callback) => {
    setTimeout(() => {
        console.log('user sended to the database');
        callback('user sended');

    }, 1500);


};

const user = loginUser('eu@gmail.com', 12, (message) => {
    console.log(message);

});