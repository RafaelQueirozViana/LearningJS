const initTabMenu = () => {

    const activeClass = 'ativo'
    const tabClickMenu = document.querySelectorAll('.js-tabmenu li');
    const tabDescriptions = document.querySelectorAll('.js-tab-description section');


    if (tabClickMenu.length && tabDescriptions.length) {

        const openTabDesc = (index) => {
            tabDescriptions.forEach(box => box.classList.remove(activeClass));
            tabDescriptions[index].classList.add(activeClass);
        }

        tabClickMenu.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                openTabDesc(index)

            })
        })
    }
}

initTabMenu();

const initAccordion = () => {
    const activeClass = 'ativo';
    const accordionButtons = document.querySelectorAll('.js-accordion h3')
    const accordionBox = document.querySelectorAll('.js-accordion li');


    function activeAccordion() {
        const container = this.parentElement;
        container.classList.toggle(activeClass);
    }


    accordionButtons.forEach(button => {
        button.addEventListener('click', activeAccordion)
    });
}

initAccordion()

const initExternalLinks = () => {
    const internalLinks = document.querySelectorAll('.js-internal-links a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: "start"
        })

    }



    internalLinks.forEach(link => {
        link.addEventListener('click', scrollToSection)
    })
}

initExternalLinks()
