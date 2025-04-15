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
        console.log('draw');
    }

    else if (choice === 'rock') {
        if (computerChoice === 'paper') {
            console.log('you are the loser');
        }

        else if (computerChoice === 'scissors') {
            console.log('you are the winner');
        }
    }

    else if(choice === 'paper') {
        
    }

    console.log(computerChoice);
}

