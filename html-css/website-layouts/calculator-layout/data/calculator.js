class Calculator {
    constructor() {
        this.result = 0;
    };

    addToDisplay(number, container) {
        const inputDisplay = document.querySelector(`.${container}`);
        inputDisplay.value += number;

    }


};

const simpleCalculator = new Calculator();