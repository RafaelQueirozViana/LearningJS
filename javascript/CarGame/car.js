export class Car {
    constructor({ model, maxSpeed }) {
        this.model = model;
        this.currentSpeed = 0;
        this.maxSpeed = maxSpeed;
    }

    displayInfo() {
        console.log(`model: ${this.model}, current speed: ${this.currentSpeed} max speed: ${this.maxSpeed}`);
    };

    go() {
        if (this.currentSpeed <= this.maxSpeed - 1) {
            this.currentSpeed += 5;




        }

        else {
            this.currentSpeed += 1;
        }

        if (this.currentSpeed == this.maxSpeed) {
            console.log('max velocity')
        }

        this.displayInfo();


    };

    brake() {
        this.currentSpeed -= 5;

        displayInfo();
    }

};

