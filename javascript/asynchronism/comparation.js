const logUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('user1')
            console.log('user logged')

        }, 1500);
    });
};

const getUserVideos = (user) => {
    return new Promise((resolve, reject) => {
        console.log('getted the user videos')
        resolve(`All videos of the user ${user}: video1, video2, video3}`);

    });
};


// Using .then  to consume the promisse 

// logUser().then((userId) => getUserVideos(userId).then((userVideos) => console.log(userVideos)));

// Using Async await to consume the promisse instead of use then

async function main() {
    const userId = await logUser();

    const userVideos = await getUserVideos(userId);

    const httpRequest = await fetch('https://supersimplebackend.dev/products');

    const userProducts = await httpRequest.json();


    console.log(userProducts);



}

main()