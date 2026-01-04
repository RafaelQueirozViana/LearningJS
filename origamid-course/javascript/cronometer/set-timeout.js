// const changeColor = () => {
//     document.body.classList.toggle('active');
// }

// setInterval(changeColor, 100);

const startButton = document.querySelector('[data-start-btn]');
const pauseButton = document.querySelector('[data-pause-btn]');

const timeText = document.querySelector('[data-timer]');
let currentTime = 0;
let intervalLoop;

const updateTimeText = () => {
    timeText.textContent = currentTime;
}

const startStopwatch = () => {
    intervalLoop = setInterval(() => {
        currentTime++;
        updateTimeText();
    }, 100);
    startButton.setAttribute('disabled', '')
}

const pauseStopwatch = () => {
    if (intervalLoop) {
        clearInterval(intervalLoop);
        startButton.removeAttribute('disabled', '')
    }

};

const resetStopwatch = () => {
    currentTime = 0;
    updateTimeText()
};


startButton.addEventListener('click', startStopwatch);
pauseButton.addEventListener('click', pauseStopwatch)
pauseButton.addEventListener('dblclick', resetStopwatch)


