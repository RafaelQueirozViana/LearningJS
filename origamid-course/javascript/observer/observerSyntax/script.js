const sections = document.querySelectorAll('.section');

function animateSection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('watching')
            entry.target.classList.add('active');
        }

        else {
            entry.target.classList.remove('active');

        }
    });
}


const observer = new IntersectionObserver(animateSection);

sections.forEach(section => observer.observe(section))


