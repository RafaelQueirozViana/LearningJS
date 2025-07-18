const input = document.querySelector(".input");
const generateButton = document.querySelector(".button");

const texts = document.querySelector(".text");

generateButton.onclick = () => {


    for(i = 0; i < input.value; i++) {
        texts.textContent += Math.floor(Math.random() * 11) + ", ";
    }
}