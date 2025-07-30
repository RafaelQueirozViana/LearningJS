

const loginUser = ({ email, age }) => {
    setTimeout(() => {
        console.log('user sended to the database')
    }, 1500);

    return { email };


};

const user = loginUser('eu@gmail.com', 12);
console.log(user);