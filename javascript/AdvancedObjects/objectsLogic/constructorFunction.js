// the constructor function istead of return an object will define a property to the object;

// For example

function CreateCircle(radius) {
    this.radius = radius;
    this.message = function () {
        console.log('hello');
    };

};

const circle = new CreateCircle();

console.log(circle);