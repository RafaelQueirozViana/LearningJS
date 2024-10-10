const numberText = document.querySelector(".number");
const numberButton = document.querySelector(".button");




numberButton.onclick = () => {
    let randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber == 0) {
        numberText.textContent = "pedra"
    }
    else if(randomNumber == 1 ) {
        numberText.textContent = "papel"
    }

    else {
        numberText.textContent = "tesoura"
    }







}


console.log(randomNumber)