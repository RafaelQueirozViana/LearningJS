import { availableCars, Car } from '../data/cars.js';

const choisedCarId = localStorage.getItem('choisedCarId');

if (choisedCarId) {
    const carDetails = availableCars.find(car => car.id === choisedCarId);
    const currentCar = new Car({ model: carDetails.model, id: carDetails.id, maxSpeed: carDetails.maxSpeed });
    console.log(currentCar);
}
