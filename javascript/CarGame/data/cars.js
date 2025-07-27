export class Car {
    constructor({ model, id, maxSpeed }) {
        this.model = model;
        this.currentSpeed = 196;
        this.maxSpeed = maxSpeed;
        this.doorStatus = 'closed';
    };

    increaseSpeed(velocity) {
        if (this.currentSpeed <= this.maxSpeed - velocity) {
            this.currentSpeed += velocity;
        }
        else if (this.currentSpeed < this.maxSpeed) {
            this.currentSpeed += 1;

        }

        else {
            console.log("you reached the limit of speed")
        }
    };



};

export const availableCars = [{
    model: 'Celta',
    id: '2039367',
    maxSpeed: 100,
},
{
    model: 'hb20',
    id: '1038465',
    maxSpeed: 200,
},
{
    model: 'onix',
    id: '1029374',
    maxSpeed: 250,
},
{
    model: 'Uno',
    id: '1359633',
    maxSpeed: 80,
},
];