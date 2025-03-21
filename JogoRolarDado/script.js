
const rollButton = document.getElementById("roll-button");
const sideButtons = document.querySelectorAll(".side-btn");
const diceContainer = document.querySelector(".dice-container");
const totalText = document.getElementById("total-txt");


let totalDices = 2;
let diceValues = [];



class Dice {
    constructor(sides) {
        this.sides = sides;
        this.currentNumber = 1;

        this.img = document.createElement('img');
        this.img.src = `./Imagens/${this.currentNumber}.jpg`;

        diceContainer.appendChild(this.img);
    }



    roll = () => {
        this.currentNumber = Math.floor(Math.random() * this.sides) + 1;

        diceValues.push(this.currentNumber);


    }

    showTotal = () => {
        totalText.textContent = diceValues.reduce((summedNumber, currentNumber) => summedNumber + currentNumber, 0)

    }


}

const dado1 = new Dice(10);
dado1.roll();

dado1.showTotal()


const dado2 = new Dice(5);
dado2.roll();
dado2.showTotal()

console.log(diceValues);


rollButton.addEventListener("click", function () {


    dado1.showTotal()
})




