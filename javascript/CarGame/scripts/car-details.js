import { availableCars, Car } from '../data/cars.js';

const statusContainer = document.querySelector('.car-status');

const choisedCarId = localStorage.getItem('choisedCarId');

const increaseSpeedBtn = document.querySelector('.inscrease-speed');
const decreaseSpeedBtn = document.querySelector('.decrease-speed');
const closeDoorBtn = document.querySelector('.close-door');


const updateHtmlStatus = (car) => {
    statusContainer.innerHTML = `
     <h1>About your car</h1>
        <p>Model: ${car.model}</p>
        <p>Current Velocity: ${car.currentSpeed} km/h</p>
        <p>Max speed: ${car.maxSpeed} km/h</p>
        <p>Door status: ${car.doorStatus}</p>`;


};

if (choisedCarId) {
    const carDetails = availableCars.find(car => car.id === choisedCarId);
    const currentCar = new Car({ model: carDetails.model, id: carDetails.id, maxSpeed: carDetails.maxSpeed });

    updateHtmlStatus(currentCar);

    increaseSpeedBtn.addEventListener('mouseup', () => {
        setInterval(() => {

        },1000);

        updateHtmlStatus(currentCar);
        currentCar.increaseSpeed(5);
    });



};


