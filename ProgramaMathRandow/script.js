const button = document.querySelector(".button");

const label = document.querySelector(".number");


button.onclick = () => {
    let randomNumber = Math.floor( Math.random() * 3)
    console.log(randomNumber);

    if(randomNumber == 0) {
        label.textContent = "pedra";

    }

    else if(randomNumber == 1) {
        label.textContent = "papel";
    }

    else {
        label.textContent = "tesoura";
    }

}
