const loginUser = ({ email, age, onSucces, onError }) => {
    const error = false;

    if (error) {
        return onError('the request was failed');
    }
    setTimeout(() => {
        console.log('user sended to database');
        onSucces({ email });

    }, 1500);

};

const printUser = (username) => {
    console.log({ username });
}

const showError = (errorMessage) => {
    console.log(`error: ${errorMessage}`);
}

const getVideos = (email, fun) => {
    const a = setTimeout(() => {
        fun(['video1', 'video2', 'video3']);
    }, 1000);
};



//Home page 

//Videos page

loginUser({
    email: 'test@gmail.com',
    age: 12,
    onSucces: ({ email }) => {
        getVideos(email, (videos) => {
            console.log(videos)
        })
    },
    onError: showError
});
