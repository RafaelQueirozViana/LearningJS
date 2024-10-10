const decreaseButton = document.querySelector("#drecrease");
const resetButton = document.querySelector("#reset");
const increaseButton = document.querySelector("#increase");
const numberCounter = document.querySelector(".number");
let initialCount = 0
let count = 0;

decreaseButton.onclick = function() {
    count--;
    numberCounter.textContent = count;

}

resetButton.onclick = function() {
    count = initialCount;
    numberCounter.textContent = count;
}

increaseButton.onclick = function() {
    count++
    numberCounter.textContent = count;
}



