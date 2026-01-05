import { outsideclick } from './outsideclick.js'

export const initMobileMenu = () => {

    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"');
    const userEvents = ['click', 'touchstart'];



    function toggleMobileMenu() {
        menuButton.classList.add('active');
        menuList.classList.add('active');
        outsideclick(menuList, userEvents, () => {
            menuButton.classList.remove('active');
            menuList.classList.remove('active');

        })
    }


    userEvents.forEach(userEvent => menuButton.addEventListener(userEvent, toggleMobileMenu));
};


