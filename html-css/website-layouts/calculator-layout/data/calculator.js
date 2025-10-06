class Calculator {
    constructor() {
        this.result = 0;
    };

    addToDisplay(number) {
        const display = document.querySelector('.display');
        display.value += number;

    }


};

const simpleCalculator = new Calculator();