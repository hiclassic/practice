// Class Declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to display person information
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Creating an instance of the Person class
const person1 = new Person("Alice", 30);
person1.displayInfo(); // Output: Name: Alice, Age: 30

// Class Expression
const Car = class {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    // Method to display car information
    displayInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    }
};

// Creating an instance of the Car class
const car1 = new Car("Toyota", "Camry");
car1.displayInfo(); // Output: Brand: Toyota, Model: Camry

// Inheritance Example
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Method to display animal information
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    /**
     * Constructs a Dog object with the given name and breed
     * @param {string} name - the dog's name
     * @param {string} breed - the dog's breed
     */
    
    constructor(name, breed) {
        super(name); // Call the parent class constructor    
        this.breed = breed;
    }   

    // Method to display dog information
    displayInfo() {
        console.log(`Name: ${this.name}, Breed: ${this.breed}`);
    }            
}

// Creating an instance of the Dog class
const dog1 = new Dog("Buddy", "Golden Retriever");
dog1.speak(); // Output: Buddy makes a sound.
dog1.displayInfo(); // Output: Name: Buddy, Breed: Golden Retriever

// Static Method Example
class MathUtils {
    // Static method to calculate the square of a number
    static square(num) {
        return num * num;
    }
}    

console.log(MathUtils.square(5)); // Output: 25     

// Getter and Setter Example
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    // Getter for width
    get width() {
        return this._width;
    }

    // Setter for width
    set width(value) {
        this._width = value;
    }

    // Getter for height
    get height() {
        return this._height;
    }

    // Setter for height
    set height(value) {
        this._height = value;
    }

    // Method to calculate area
    area() {
        return this._width * this._height;
    }
}    

const rect = new Rectangle(5, 10);
console.log(rect.width); // Output: 5
console.log(rect.height); // Output: 10
console.log(rect.area()); // Output: 50 
rect.width = 15; // Set new width
console.log(rect.area()); // Output: 150
// Output: 150
rect.height = 20; // Set new height
console.log(rect.area()); // Output: 300




