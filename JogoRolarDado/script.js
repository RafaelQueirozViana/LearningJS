const rollButton = document.getElementById("roll-button");
const sideButtons = document.querySelectorAll(".side-btn");
const diceContainer = document.querySelector(".dice-container");
const totalText = document.getElementById("total-txt");

let dicesArray = [];
let onColdown = false;
class Dice {
    constructor(sides, color) {
        this.sides = sides;
        this.currentNumber = Math.floor(Math.random() * (this.sides) + 1);
        this.color = color;

        this.face = document.createElement('p');
        this.face.className = "dice-content";
        this.face.style.backgroundColor = this.color;
        this.face.textContent = this.currentNumber;
        this.face.addEventListener("click", () => this.remove());

        diceContainer.appendChild(this.face);
        dicesArray.push(this);
    }

    roll() {
        this.face.classList.add('rolando');
        this.face.textContent = '';
        setTimeout(() => {
            this.currentNumber = Math.floor(Math.random() * (this.sides) + 1);
            this.face.textContent = this.currentNumber;
            this.face.classList.remove('rolando');
        }, 1000)


    }

    remove() {
        diceContainer.removeChild(this.face);
        let index = dicesArray.indexOf((this));
        dicesArray.splice(index, 1)
    }

}

const dado1 = new Dice(6, "cyan");

function totalValue() {
    const soma = dicesArray.reduce((total, current) => {
        return total + current.currentNumber;
    }, 0);

    totalText.textContent = `Total:  ${soma} `;

}

sideButtons.forEach(currentButton => {
    currentButton.addEventListener("click", function () {
        const sides = parseInt(currentButton.textContent);
        const color = window.getComputedStyle(currentButton).backgroundColor;
        const newDice = new Dice(sides, color);
    })
})


rollButton.addEventListener("click", function () {

    if (onColdown === false) {
        onColdown = true;

        dicesArray.forEach(dice => {
            dice.roll();
        })

        setTimeout(() => {
            totalValue()
            onColdown = false;
        }, 1000);
    }
})






// const rollButton = document.getElementById("roll-button");
// const sideButtons = document.querySelectorAll(".side-btn");
// const diceContainer = document.querySelector(".dice-container");
// const totalText = document.getElementById("total-txt");


// let totalDices = 2;
// let diceValues = [];



// class Dice {
//     constructor(sides) {
//         this.sides = sides;
//         this.currentNumber = 1;

//         this.img = document.createElement('img');
//         this.img.src = `./Imagens/${this.currentNumber}.jpg`;

//         diceContainer.appendChild(this.img);
//     }



//     roll = () => {
//         this.currentNumber = Math.floor(Math.random() * this.sides) + 1;

//         diceValues.push(this.currentNumber);


//     }

//     showTotal = () => {
//         totalText.textContent = diceValues.reduce((summedNumber, currentNumber) => summedNumber + currentNumber, 0)

//     }


// }

// const dado1 = new Dice(10);
// dado1.roll();

// dado1.showTotal()


// const dado2 = new Dice(5);
// dado2.roll();
// dado2.showTotal()

// console.log(diceValues);


// rollButton.addEventListener("click", function () {


//     dado1.showTotal()
// })




