
const cards = document.querySelectorAll('.card');

const handleObserver = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.toggle('active');
            observer.unobserve(entry.target)
        }

    });
};

const observer = new IntersectionObserver(handleObserver, { threshold: .5 });



cards.forEach(card => observer.observe(card));

