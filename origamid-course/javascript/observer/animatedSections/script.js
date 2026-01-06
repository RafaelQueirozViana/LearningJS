const sections = document.querySelectorAll('[data-section-anim="scroll"]');

const animateSection = (entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target)
        }
    });
};

const observer = new IntersectionObserver(animateSection, { threshold: .5 });
sections.forEach(section => observer.observe(section));
