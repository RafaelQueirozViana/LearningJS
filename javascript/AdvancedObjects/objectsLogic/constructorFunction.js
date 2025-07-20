// the constructor function istead of return an object will define a property to the object;

// For example

function Circle(radius) {
    this.radius = radius;
    this.message = function () {
        console.log('hello');
    };

};

console.log(this)


const circle = new Circle(2);

console.log(circle);