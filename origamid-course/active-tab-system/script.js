const initTabMenu = () => {

    const activeClass = 'active'
    const tabClickMenu = document.querySelectorAll('.js-tabmenu li');
    const tabDescriptions = document.querySelectorAll('.js-tab-description aside');


    if (tabClickMenu.length && tabDescriptions.length) {
        const openTabDesc = (index) => {
            tabDescriptions.forEach(box => box.classList.remove(activeClass));
            tabDescriptions[index].classList.add(activeClass);
        }

        tabClickMenu.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                openTabDesc(index);
            })
        })
    }
}

initTabMenu()

const activeClass = 'active';
const accordionButtons = document.querySelectorAll('.js-accordion h3')
const accordionBox = document.querySelectorAll('.js-accordion li');


function activeAccordion() {
    const container = this.parentElement;
    container.classList.toggle(activeClass);
}


accordionButtons.forEach(button => {
    button.addEventListener('click', activeAccordion)
});