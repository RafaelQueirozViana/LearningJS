import { availableCars, Car } from '../data/cars.js';

const statusContainer = document.querySelector('.car-status');

const choisedCarId = localStorage.getItem('choisedCarId');

const increaseSpeedBtn = document.querySelector('.inscrease-speed');
const decreaseSpeedBtn = document.querySelector('.decrease-speed');
const closeDoorBtn = document.querySelector('.close-door');


class Controller {
    constructor() {
        this.carDetails = availableCars.find(car => car.id === choisedCarId);
        this.currentCar = new Car({ model: this.carDetails.model, id: this.carDetails.id, maxSpeed: this.carDetails.maxSpeed });
        this.currentInterval;
    }

    updateHtmlStatus() {
        statusContainer.innerHTML = `
     <h1>About your car</h1>
        <p>Model: ${this.currentCar.model}</p>
        <p>Current Velocity: ${this.currentCar.currentSpeed} km/h</p>
        <p>Max speed: ${this.currentCar.maxSpeed} km/h</p>
        <p>Door status: ${this.currentCar.doorStatus}</p>`;


    };

    startIncreasingSpeed() {
        this.currentInterval = setInterval(() => {
            this.updateHtmlStatus();
            this.currentCar.increaseSpeed(5);
        }, 200)
    }

    stopInscreaseSpeed() {
        clearInterval(this.currentInterval);
        this.currentInterval = undefined;
    }
}

const ctrl = new Controller();

if (choisedCarId) {
    ctrl.updateHtmlStatus();

    increaseSpeedBtn.addEventListener('mousedown', () => {
        ctrl.startIncreasingSpeed();

        document.addEventListener('mouseup', () => {
            ctrl.stopInscreaseSpeed();
        });
    });






};


