
const cards = document.querySelectorAll('.card');

const handleObserver = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target)
        }


        console.log('execulted')


    });
};



const observer = new IntersectionObserver(handleObserver, {});

cards.forEach(card => observer.observe(card))
















// const cards = document.querySelectorAll('.card');

// const handleObserver = (entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('active');
//             observer.unobserve(entry.target)
//         }

//         console.log('execulted')

//     });
// };

// const observer = new IntersectionObserver(handleObserver, { threshold: .5 });



// cards.forEach(card => observer.observe(card));

