const resultText = document.getElementById('result-text');
const historyContainer = document.getElementById('history-list');
const totalButton = document.getElementById('total-button');
const keyButtons = document.querySelectorAll('.numbers p');

const calculatorObj = {
    totalValue: 0,
    history: localStorage.getItem('history') || [],
    currentOperation: undefined,

    sum({ value1, value2 }) {
        let total = value1 + value2;
        this.totalValue = total;
        return total;
    },

    minus(value1, value2) {
        let total = value1 - value2;
        this.totalValue = total;
        return total;
    },

    deletar() {
        resultText.textContent = 0
    }
}

keyButtons.forEach(currentBtn => {
    currentBtn.addEventListener('click', () => {

        if (event.target.classList.contains('operator')) {
            resultText.textContent += event.target.textContent
            calculatorObj.currentOperation = event.target.textContent;

        }

        else if (event.target.classList.contains('key') && resultText.textContent === '0') {
            resultText.textContent = event.target.textContent
            console.log('st 0-')
        }

        else if (event.target.classList.contains('key')) {
            resultText.textContent += event.target.textContent
        }

    })
})

const showTotal = () => {

    const text = resultText.textContent;
    let totalValue;

    const match = text.match(/(\d+)\s*([+\-*/])\s*(\d+)/);

    const firstValue = Number(match[1]); // '444'
    const operator = match[2];   // '+'
    const secondValue = Number(match[3]); // '555'

    switch (operator) {
        case '+':
            totalValue = calculatorObj.sum({ value1: firstValue, value2: secondValue })
            break;
    }

    calculatorObj.history.push(`${text} = ${totalValue}`);

    updateCalculator()

}




const updateCalculator = () => {

    const { totalValue, history } = calculatorObj
    resultText.textContent = totalValue;

    // saving on history 

    const historyLine = document.createElement('p');



    const historyStorage = localStorage.getItem('history');



    historyLine.textContent = historyStorage[historyStorage.length - 1]    // history[history.length - 1];
    historyContainer.appendChild(historyLine);

    console.log(localStorage);



    localStorage.setItem('history', JSON.stringify(history))



}

updateCalculator()
