const loginUser = ({ email, age, onSucces, onError }) => {
    const error = true;

    if (error) {
        return onError('the request was failed');
    }
    setTimeout(() => {
        console.log('user sended to database');
        onSucces(email);

    }, 1500);

};

const helloUser = (username) => {
    console.log(`hello ${username}`);
}

const showError = (errorMessage) => {
    console.log(`error: ${errorMessage}`);
}

loginUser({ email: 'test@gmail.com', age: 12, onSucces: helloUser, onError: showError });