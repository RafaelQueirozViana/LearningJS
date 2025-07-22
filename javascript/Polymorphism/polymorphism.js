//What's really polymorphism?

// Polymorphism is a technic used 

// Polymorphism = use a method without knowing the class

// Basically if you have a class dog and the class has inheritance, for example:

class Animal {
    speak() {
        console.log('some sound');
    }
}

class Dog extends Animal {
    speak() {
        console.log('au au');
    };
};

class Cat extends Animal {
    speak() {
        console.log('miau');
    };
};

const animalsArray = [new Dog, new Cat];

animalsArray.forEach(animal => {
    animalsArray.speak();
});

// In this example you don't know what is the exactly animal that is running in the forEach
// This is called Polymorphism.

// An technic that you are using a method without knowing the class