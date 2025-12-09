const initTabMenu = () => {

    const activeClass = 'ativo'
    const tabClickMenu = document.querySelectorAll('.js-tabmenu li');
    const tabDescriptions = document.querySelectorAll('[data-tab="content"] section');


    if (tabClickMenu.length && tabDescriptions.length) {

        const openTabDesc = (index) => {
            tabDescriptions.forEach(box => box.classList.remove(activeClass));
            const matchTextBox = tabDescriptions[index];

            matchTextBox.classList.add(activeClass);
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

initAccordion()

const initExternalLinks = () => {
    const internalLinks = document.querySelectorAll('.js-internal-links a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href); // it returns #nameofsection

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

function initScrollAnimation() {
    const sections = document.querySelectorAll('[data-section-anim="scroll"]');

    const sectionHalf = window.innerHeight * 0.6;

    function scrolAnimation() {
        const activeClass = 'ativo'

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top - sectionHalf;

            if (sectionTop <= 0) {
                section.classList.add(activeClass);
            }
        });


    };

    scrolAnimation();

    window.addEventListener('scroll', scrolAnimation)
}


initScrollAnimation();

