
const loginUser = (name, email) => {
  return new Promise((resolve, reject) => { // returning promisse
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://supersimplebackend.dev/products')
    xhr.send();

    xhr.addEventListener('load', () => {
      let data = xhr.response;

      if (!data) {
        reject('error ocurred');
      }

      resolve({ name, email });
      console.log('created user')

    });


  });
};

const getUserVideos = (user) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      console.log(`finded first video for the email: ${user.email}`);
      resolve(['video1', 'video2', 'video3', 'video4']);
    }, 1500);
  });

};


const getFirstVideo = (videos) => {
  return videos[0];
};


loginUser('joão', 'joão@gmail.com')
  .then((user) => getUserVideos(user))
  .then((videos) => console.log(getFirstVideo(videos)))
  .catch((message) => console.log(message));

//calling the promisse