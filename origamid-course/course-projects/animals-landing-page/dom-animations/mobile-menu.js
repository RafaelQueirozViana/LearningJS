import { outsideclick } from './outsideclick.js'

export const initMobileMenu = () => {

    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"');



    function toggleMobileMenu() {
        menuButton.classList.add('active');
        menuList.classList.add('active');
        outsideclick(menuList, ['click', 'touchstart'], () => {
            menuButton.classList.remove('active');
            menuList.classList.remove('active');

        })
    }


    menuButton.addEventListener('click', toggleMobileMenu)
};


