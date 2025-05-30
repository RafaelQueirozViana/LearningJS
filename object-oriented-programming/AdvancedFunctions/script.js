// ------- Passing a function in another function -------- //

/*
function display(param) {
    console.log(param());

};

display(function () {
    return 5 + 15;
});

*/

// ------- SetTimeOut -------- //


// setTimeout(() => {
//     console.log('ds')
// }, 1000);


// using event

document.body.addEventListener('keydown', (event) => {
    console.log(event.key);
});