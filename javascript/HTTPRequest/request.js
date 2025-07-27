let message;
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();

xhr.addEventListener('load', () => {
    message = xhr.response;
    console.log(message)



});



