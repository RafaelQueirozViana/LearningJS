const input = document.getElementById("inpt");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
    let inputValue = input.value;
    for (let i = 0; i < inputValue; i++) {
        const randomNum = Math.floor(Math.random() * 6) + 1;
        console.log(randomNum)
    }


})
