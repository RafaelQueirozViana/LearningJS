export const initAnimatedNumbers = () => {

    const startNumAnimation = () => {
        const numbers = document.querySelectorAll('[data-number]');

        numbers.forEach((number) => {
            let currentNumber = 0;
            const limitNumber = number.innerText;

            const timer = setInterval(() => {
                const relativeNumber = Math.floor(limitNumber / 60);
                currentNumber += relativeNumber;

                number.textContent = currentNumber;

                if (currentNumber > limitNumber) {
                    number.textContent = limitNumber;
                    clearInterval(timer);
                }
            }, 25);
        })
    }


    const handleObserver = (entries) => {

        if (entries[0].target.classList.contains('active')) {
            startNumAnimation();
            observer.disconnect();
        }

    }

    const observerTarget = document.querySelector('.numeros');
    const observer = new MutationObserver(handleObserver, {});


    observer.observe(observerTarget, { attributes: true });










}





