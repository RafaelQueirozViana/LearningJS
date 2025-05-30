
let score = JSON.parse(localStorage.getItem('score')) || { 
    wins: 0,
    loses: 0,
    ties: 0,
}



function paperGame(choice) {
    let computerChoice = '';
    const randomNum = Math.round(Math.random() * 3)
    switch (randomNum) {
        case 1: computerChoice = 'rock'
            break;

        case 2: computerChoice = 'paper'
            break;

        case 3: computerChoice = 'scissors'
            break
    }

    if (choice === computerChoice) {
        score.ties++
        Message('tied', choice, computerChoice);
    }

    else if (choice === 'rock') {
        if (computerChoice === 'paper') {
            score.loses++
            Message('loser', choice, computerChoice);
        }

        else if (computerChoice === 'scissors') {
            score.wins++
            Message('win', choice, computerChoice);
        }
    }

    else if (choice === 'paper') {
        if (computerChoice === 'rock') {
            score.wins++
            Message('win', choice, computerChoice);

        }

        else if (computerChoice === 'scissors') {
            score.loses++
            Message('loser', choice, computerChoice);

        }
    }

    else if (choice === 'scissors') {
        if (computerChoice === 'paper') {
            score.wins++
            Message('win', choice, computerChoice);

        }

        else if (computerChoice === 'rock') {
            score.loses++
            Message('loser', choice, computerChoice);

        }
    }

    localStorage.setItem('score', JSON.stringify(score));



}

function resetScore() {
    score.wins = 0;
    score.ties = 0;
    score.loses = 0;
    localStorage.removeItem('score');
    alert('reset sucessful');
}


const Message = (result, choice, computerChoice) => {
    window.alert(` you picked ${choice}, the computer picked ${computerChoice}. your ${result}, check your score: Ties: ${score.ties},Loses: ${score.loses}, Wins: ${score.wins}`)
}



