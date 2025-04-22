const chooseContainer = document.querySelector('.choose-content');
const resultContainer = document.querySelector('.result-content');
const scoreText = document.querySelector('.score-container p');


let playerScore = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    tyes: 0,
};




const computerPick = () => {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
        case 1: return 'rock'
            break;
        case 2: return 'paper'
            break;

        case 3: return 'scissors'
            break;

    }
};

const game = (userChoice) => {
    console.log('s')
    const computerChoice = computerPick();


    if (userChoice == computerChoice) {
        showResult({
            userChoice: userChoice,
            compChoice: computerChoice,
            result: 'tye',
        });
    }

    else if (userChoice == 'rock') {
        if (computerChoice == 'scissors') {
            showResult({
                userChoice: userChoice,
                compChoice: computerChoice,
                result: 'winner'
            });
        }

        else if (computerChoice == 'paper') {
            showResult({
                userChoice: userChoice,
                compChoice: computerChoice,
                result: 'loser'
            });
        }
    }

    else if (userChoice == 'paper') {
        if (computerChoice == 'rock') {
            showResult({
                userChoice: userChoice,
                compChoice: computerChoice,
                result: 'winner'
            });
        }

        else if (computerChoice == 'scissors') {
            showResult({
                userChoice: userChoice,
                compChoice: computerChoice,
                result: 'loser'
            });
        }
    }

    else if (userChoice == 'scissors') {
        if (computerChoice == 'paper') {
            showResult({
                userChoice: userChoice,
                compChoice: computerChoice,
                result: 'winner'
            });
        }

        else if (computerChoice == 'rock') {
            showResult({
                userChoice: userChoice,
                compChoice: computerChoice,
                result: 'loser'
            });
        }
    }
};

const showResult = ({ userChoice, compChoice, result }) => {
    chooseContainer.classList.add('hide');
    resultContainer.classList.remove('hide');

    //show texts 

    const resultText = resultContainer.querySelector('.result-text');
    console.log(resultText);
    const userChoiceText = resultContainer.querySelector('.user-choice');
    const computerChoiceText = resultContainer.querySelector('.computer-choice');
    resultText.textContent = result;
    userChoiceText.textContent = userChoice;
    computerChoiceText.textContent = compChoice;

    //Show hand images

    const handImg1 = resultContainer.querySelector('#choice-1');
    const handImg2 = resultContainer.querySelector('#choice-2');

    handImg1.src = `./Images/${userChoice}.png`
    handImg2.src = `./Images/${compChoice}.png`



    //score function

    scoreFunction(result);


};

const scoreFunction = (result) => {

    switch (result) {
        case 'winner':
            playerScore.wins++;
            break;
        case 'loser':
            playerScore.loses++;
            break;

        case 'tye':
            playerScore.tyes++;
            break;
    }
    localStorage.setItem('score', JSON.stringify(playerScore));
    scoreText.textContent = `wins: ${playerScore.wins}, loses: ${playerScore.loses}, ties: ${playerScore.tyes}`


}

const playAgain = () => {
    chooseContainer.classList.remove('hide');
    resultContainer.classList.add('hide');
}

const resetScore = () => {
    playerScore.wins = 0;
    playerScore.loses = 0;
    playerScore.tyes = 0;

    localStorage.removeItem('score');
    scoreFunction()
}






