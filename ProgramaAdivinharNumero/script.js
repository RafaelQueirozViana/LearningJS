const minNumber = 1;
const MaxNumber = 100;

const RandomNumber = Math.floor(Math.random() * (MaxNumber - minNumber)) + minNumber;

let running = true;
let attemps = 0;
let guess;

    while(running) {
        guess = window.prompt(`Guess a number between. ${minNumber} - ${MaxNumber}`);
        guess = Number(guess);

         if(isNaN(guess)) {
            alert("please enter a valid number");
        }

        else if(guess < minNumber || guess > MaxNumber) {
            alert("Please enter a valid number");
        }

        else {
            attemps++;
            if(guess < RandomNumber) {
                alert("this number is low, enter a higher number");
            }
            else if(guess > RandomNumber) {
                alert("this number is high, enter a lower number ")
            }
            else  {
                alert(`You got it right! this number is ${RandomNumber}, and you tried ${attemps} times `)
                running = false;
            }
        }

    


}
