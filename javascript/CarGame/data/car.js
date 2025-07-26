export class Car {
    constructor({ model, maxSpeed }) {
        this.model = model;
        this.currentSpeed = 0;
        this.maxSpeed = maxSpeed;
        this.doorStatus = 'closed';
    };

};