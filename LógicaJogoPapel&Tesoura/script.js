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
        window.alert(`draw, check your score: Ties: ${score.ties},Loses: ${score.loses}, Wins: ${score.wins}`);
    }

    else if (choice === 'rock') {
        if (computerChoice === 'paper') {
            score.loses++
            window.alert(`you are the loser, check your score: Ties: ${score.ties},Loses: ${score.loses}, Wins: ${score.wins}`);
        }

        else if (computerChoice === 'scissors') {
            score.wins++
            window.alert(`your win, check your score: Ties: ${score.ties},Loses: ${score.loses}, Wins: ${score.wins}`);
        }
    }

    else if (choice === 'paper') {
        if (computerChoice === 'rock') {
            alert('you are the winner');
        }

        else if (computerChoice === 'scissors') {
            alert('you are the loser');
        }
    }

    else if (choice === 'scissors') {
        if (computerChoice === 'paper') {
            alert('you are the winner');
        }

        else if (computerChoice === 'rock') {
            alert('you are the loser');
        }
    }


}

