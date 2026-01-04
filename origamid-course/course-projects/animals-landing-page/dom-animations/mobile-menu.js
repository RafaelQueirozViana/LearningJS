export const initMobileMenu = () => {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"');



    const toggleMobileMenu = () => {
        menuList.classList.toggle('active')
    }


    menuButton.addEventListener('click', toggleMobileMenu)
};


