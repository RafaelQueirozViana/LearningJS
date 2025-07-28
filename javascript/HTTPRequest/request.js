


let message;
const xhr = new XMLHttpRequest(); // it makes a request from the backend
xhr.open('GET', 'https://supersimplebackend.dev/not-supported'); // Here you will tell of the the javascript what's the url from the backend
xhr.send(); // here you will send the request to the backend

// Remember: When is happening a request, it can take time to send the request and receive the response from the backend

// Below is a code that add an eventListener load, that will be activate when de request gets the response from the backend
xhr.addEventListener('load', () => {
    message = xhr.response;
    console.log(message)

});
