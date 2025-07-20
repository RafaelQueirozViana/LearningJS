//Factory function is a way to create objects using a function to generate objects

//for example

function CreateCircle(radius) {
    return {
        circleRadius: radius,
        message() {
            console.log('hello')
        },
    };
};

const circlesArray = [20, 30, 40, 10, 50].map(circleRadius => CreateCircle(circleRadius));

console.log(circlesArray)