// the constructor function istead of return an object will define a property to the object;

// For example

function Circle(radius) {
    this.radius = radius;
    this.message = function () {
        console.log('hello');
    };

};


const circle = new Circle(2);

console.log(circle);

// The "new" operator only can be use in constructor functions (functions that use this to set properties
//  instead of use return)

// It will create an empty object and after will add the constructor values (values defined in "this" )
