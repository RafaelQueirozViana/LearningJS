// export function initScrollAnimation() {
//     const sections = document.querySelectorAll('[data-section-anim="scroll"]');

//     const sectionHalf = window.innerHeight * 0.6;

//     function scrolAnimation() {
//         const activeClass = 'ativo'

//         sections.forEach(section => {
//             const sectionTop = section.getBoundingClientRect().top - sectionHalf;

//             if (sectionTop <= 0) {
//                 section.classList.add(activeClass);
//             }
//         });


//     };

//     scrolAnimation();

//     window.addEventListener('scroll', scrolAnimation)
// }

export function initScrollAnimation() {
    const sections = document.querySelectorAll('[data-section-anim="scroll"]');

    const animateSection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target)

            }


        });
    };

    const observer = new IntersectionObserver(animateSection, { threshold: .7 });

    sections.forEach(section => observer.observe(section));
}

