
const circlePath = document.querySelector(".ball");

document.documentElement.addEventListener("click",)

// DESTRUCTION EX1

// const useState = [
//     "blue",
//     function (color) {
//         this[0] = color;
//     }
// ]

// const [color, setColor] = useState;

// setColor("red");

// console.log(useState)

// DESTRUCTION EX2



// function printFunction(event) {
//     const { clientY, clientX, isTrusted } = event;

//     console.log(isTrusted);

// }


//

// document.documentElement.addEventListener("mousemove", printFunction);




// DESTRUCTION EX3


// class User {
//     constructor({ id, name, email, age }) {
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.age = age;
//     }

//     showStats() {
//         console.log(this.id, this.name, this.email, this.age);
//     }
// }

// const user1 = new User({
//     id: 333,

//     age: 18,
//     name: "lucas",
// });

// user1.showStats();

// EXEMPLO 4

// function user({ id = "lucas", ola2, lastname, email }, { ola }) {
//     console.log(id);
//     console.log(ola);
// }

// user({}, { ola: 200 });


// function mousePrint({ clientX, clientY }) {

//     console.log(clientX, clientY);
// }

// document.documentElement.addEventListener("mousemove", mousePrint({ clientY: 3 }));


// const colorArray = ["blue", function (color) { colorArray[0] = color }]

// const [color, setColor] = colorArray;

// setColor("red2");

// console.log(colorArray);



