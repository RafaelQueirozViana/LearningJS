const decreaseButton = document.querySelector("#drecrease");
const increaseButton = document.querySelector("#increase");
const resetButton = document.querySelector("#reset");

const textLabel = document.querySelector(".number");
const initialContage = 0;
let currentContage = 0;




decreaseButton.onclick = () => {
    currentContage--;
    textLabel.textContent = currentContage;
   
}

increaseButton.onclick = function() {
    currentContage++;
    textLabel.textContent = currentContage;
}

resetButton.onclick = function() {
    currentContage = initialContage;
    textLabel.textContent = initialContage;
}




