import { simpleCalculator } from './data/calculator.js';

const renderPage = () => {
    const buttonsContainer = document.querySelectorAll('.buttons-container button');
    buttonsContainer.forEach(button => {
        button.addEventListener('click', () => {
            const buttonValue = button.dataset.value;
            simpleCalculator.addToDisplay({ number: buttonValue, container: '.display' })
        });
    });

};

renderPage()