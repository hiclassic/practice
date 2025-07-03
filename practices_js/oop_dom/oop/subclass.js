//subclasses in javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Breed: ${this.breed}`);
    }
}

const dog1 = new Dog("Buddy", "Golden Retriever");
dog1.speak(); // Output: Buddy makes a sound.
dog1.displayInfo(); // Output: Name: Buddy, Breed: Golden Retriever 

// Static Method Example
class MathUtils {
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

// Example usage of Rectangle class
const rect = new Rectangle(10, 5);
console.log(rect.width); // Output: 10
console.log(rect.height); // Output: 5
rect.width = 15; // Using setter to change width
console.log(rect.area()); // Output: 75 (15 * 5)
rect.height = 10; // Using setter to change height
console.log(rect.area()); // Output: 150 (15 * 10)
