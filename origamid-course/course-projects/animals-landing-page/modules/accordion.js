export const initAccordion = () => {
    const activeClass = 'ativo';
    const accordionButtons = document.querySelectorAll('[data-accordion="on"] h3')
    const accordionBox = document.querySelectorAll('[data-accordion="on"] li');


    function activeAccordion(event) {
        const container = this.parentElement;
        container.classList.toggle(activeClass);
    }


    accordionButtons.forEach(button => {
        button.addEventListener('click', activeAccordion)
    });
}