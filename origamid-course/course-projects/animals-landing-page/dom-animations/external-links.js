export const initExternalLinks = () => {
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