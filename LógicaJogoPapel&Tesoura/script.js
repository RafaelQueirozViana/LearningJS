const score = {
    wins: 0,
    loses: 0,
    ties: 0
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
            Message('win', choice, computerChoice);

        }

        else if (computerChoice === 'scissors') {
            Message('loser', choice, computerChoice);

        }
    }

    else if (choice === 'scissors') {
        if (computerChoice === 'paper') {
            Message('win', choice, computerChoice);

        }

        else if (computerChoice === 'rock') {
            Message('loser', choice, computerChoice);

        }
    }


}


const Message = (result, choice, computerChoice) => {
    window.alert(` you picked ${choice}, the computer picked ${computerChoice}. your ${result}, check your score: Ties: ${score.ties},Loses: ${score.loses}, Wins: ${score.wins}`)
}