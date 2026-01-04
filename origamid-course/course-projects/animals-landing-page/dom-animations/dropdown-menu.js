import { outsideclick } from './outsideclick.js';

export const initDropdown = () => {

    const dropdownButton = document.querySelector('[data-dropdown]');

    ['click', 'touchstart'].forEach(userEvent => dropdownButton.addEventListener(userEvent, handleClick))

    function handleClick(event) {
        this.classList.add('active');
        outsideclick(this, ['click', 'touchstart'], () => {
            this.classList.remove('active');
        });

    };
};

setTimeout(() => {

}, 1000)



