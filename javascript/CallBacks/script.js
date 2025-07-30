

const loginUser = (email, age, sucessMessage, errorMessage) => {
    setTimeout(() => {
        let error = true;
        console.log('user sended to the database');

        if (error) {
            return errorMessage(email);
        };

        sucessMessage(email);


    }, 1500);


};

const sucessMessage = (email) => {
    console.log(`the user ${email}, was logged sucessful!`);
}
const errorMessage = (email) => {
    console.log(`the user ${email}, was failed on login`);
}

loginUser('eu@gmail.com', 12, sucessMessage, errorMessage);
