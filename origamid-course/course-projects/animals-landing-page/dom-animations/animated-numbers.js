export const initAnimatedNumbers = () => {
    const numbers = document.querySelectorAll('[data-number]');
    numbers.forEach(number => {
        const total = number.innerText;
        const relativeNumber = Math.floor(total / 100);
        let currentNumber = 1;

        const timer = setInterval(() => {
            currentNumber += relativeNumber;
            number.textContent = currentNumber;
            if (currentNumber > total) {
                number.innerText = total;
                clearInterval(timer);
            }
        }, 20 * Math.random())


    });
};