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
        window.alert('draw');
    }

    else if (choice === 'rock') {
        if (computerChoice === 'paper') {
            alert('you are the loser');
        }

        else if (computerChoice === 'scissors') {
            alert('you are the winner');
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

    console.log(computerChoice);
}

