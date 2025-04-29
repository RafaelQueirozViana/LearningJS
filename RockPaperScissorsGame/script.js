const a = document.querySelector(".button")


class Buttons {
    constructor({ buttonsClass, classlistName }) {
        this.buttonClass = buttonsClass;
        this.classlistName = classlistName;
    }

    oneClick() {
        const allButtons = document.querySelectorAll(`.${this.buttonClass}`);

        allButtons.forEach(button => {
            button.addEventListener('click', () => {
                allButtons.forEach(btn => btn.classList.remove(this.classlistName));

                button.classList.toggle(this.classlistName);
            })
        })


    }

}

const firstButtons = new Buttons({ classlistName: 'active', buttonsClass: 'button-click' });
firstButtons.oneClick();

const secondButtons = new Buttons({ classlistName: 'active', buttonsClass: 'button-click2' });
secondButtons.oneClick();


const chooseContainer = document.querySelector('.choose-content');
const resultContainer = document.querySelector('.result-content');
const scoreText = document.querySelector('.score-container p');

let playerScore = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0,
};

const winsAgainst = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
};

const computerPick = () => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
};

const game = (userChoice) => {
    const computerChoice = computerPick();
    let result;

    if (userChoice === computerChoice) {
        result = 'tie';
    } else if (winsAgainst[userChoice] === computerChoice) {
        result = 'winner';
    } else {
        result = 'loser';
    }

    showResult({ userChoice, compChoice: computerChoice, result });
};

const showResult = ({ userChoice, compChoice, result }) => {
    chooseContainer.classList.add('hide');
    resultContainer.classList.remove('hide');

    resultContainer.querySelector('.result-text').textContent = result;
    resultContainer.querySelector('.user-choice').textContent = userChoice;
    resultContainer.querySelector('.computer-choice').textContent = compChoice;
    resultContainer.querySelector('#choice-1').src = `./Images/${userChoice}.png`;
    resultContainer.querySelector('#choice-2').src = `./Images/${compChoice}.png`;

    updateScore(result);
};

const updateScore = (result) => {
    if (result === 'winner') playerScore.wins++;
    else if (result === 'loser') playerScore.loses++;
    else if (result === 'tie') playerScore.ties++;

    localStorage.setItem('score', JSON.stringify(playerScore));
    updateScoreText();
};

const updateScoreText = () => {
    scoreText.textContent = `wins: ${playerScore.wins}, loses: ${playerScore.loses}, ties: ${playerScore.ties}`;
};

const playAgain = () => {
    chooseContainer.classList.remove('hide');
    resultContainer.classList.add('hide');
};

const resetScore = () => {
    playerScore = { wins: 0, loses: 0, ties: 0 };
    localStorage.removeItem('score');
    updateScoreText();
};

// Inicializa placar ao carregar
updateScoreText();
