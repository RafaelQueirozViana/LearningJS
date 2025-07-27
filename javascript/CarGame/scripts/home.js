const detailsButton = document.querySelectorAll('.view-car-details');

detailsButton.forEach(button => {
    button.addEventListener('click', () => {
        const carId = button.dataset.carId;
        localStorage.setItem('choisedCarId', carId);
    });
});

