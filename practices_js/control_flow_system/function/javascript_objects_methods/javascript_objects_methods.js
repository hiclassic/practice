// all in one file for javascript objects methods fundamental basics to advanced levels that provides a comprehensive understanding of JavaScript objects and methods
// JavaScript Objects and Methods
// JavaScript objects are collections of key-value pairs, where keys are strings (or Symbols) and values can be any data type.
// Objects can be created using object literals, constructors, or the Object.create() method.
// Object Literal Syntax
const person = { //here person is an object variable and {} is an object literal and = is an assignment operator and const is a keyword that declares a constant variable
    name: 'John', //here : is a key-value pair separator, name is the key and 'John' is the value, so name: 'John' is a property of the person object
    age: 30, // Property definition :name and age are properties of the person object and their values are 'John' and 30 respectively
    greet: function() {     // Method definition :greet is a method of the person object and it is a function here {} is a function and () is a function call
        console.log(`Hello, my name is ${this.name}`);
    }
}; 
// Accessing Object Properties
console.log(person.name); // Output: John and here person.name is accessing the name property of the person object
console.log(person['age']); // Output: 30 and here person['age'] is accessing the age property of the person object
// Adding and Modifying Properties
person.email = 'e0MfQ@example.com'; // Adding a new property email to the person object and its value is 'e0MfQ@example.com' 
person.age = 31;
// Calling Object Methods
person.greet(); // Output: Hello, my name is John   
// Deleting Properties
delete person.email; // Deleting the email property from the person object here delete is a keyword that deletes a property from an object
console.log(person.email); // Output: undefined
// Object Constructor
function Person(name, age) { // here Person is a constructor function that creates a new object with the properties name and age, here function is a keyword that defines a function, (name, age) are the parameters of the function and {} is a function body
    this.name = name; // here this is a keyword that refers to the current object being created, name is a parameter of the function and this.name is a property of the current object
    this.age = age;
    this.greet = function() { // here this.greet is a method of the current object and it is a function that logs a message to the console 
        console.log(`Hello, my name is ${this.name}`);
    };
}
const jane = new Person('Jane', 25);
jane.greet(); // Output: Hello, my name is Jane
// Object.create() Method
const animal = { // here animal is an object and {} is an object literal
    type: 'Animal', // Property definition :type is a property of the animal object and its value is 'Animal'
    speak: function() { // Method definition :speak is a method of the animal object and it is a function here {} is a function and () is a function call
        console.log(`The ${this.type} makes a sound.`);
    }
};
const dog = Object.create(animal); // here Object.create() is a method that creates a new object with the animal object as its prototype, so dog is a new object that inherits properties and methods from the animal object 
dog.type = 'Dog'; // here dog.type is a property of the dog object and its value is 'Dog', so dog is a new object that inherits properties and methods from the animal object
// Calling the inherited method of the animal object, here dog.speak() is calling the speak method of the animal object, which is inherited by the dog object
dog.speak(); // Output: The Dog makes a sound.
// Object.keys(), Object.values(), and Object.entries()
console.log(Object.keys(person)); // Output: ['name', 'age', 'greet']
console.log(Object.values(person)); // Output: ['John', 31, [Function: greet]]
console.log(Object.entries(person)); // Output: [['name', 'John'], ['age', 31], ['greet', [Function: greet]]]
// Object.assign() Method 
const obj1 = { a: 1, b: 2 }; // here obj1 is an object with properties a and b, and their values are 1 and 2 respectively 
const obj2 = { c: 3, d: 4 }; // here obj2 is an object with properties c and d, and their values are 3 and 4 respectively
// Merging Objects using Object.assign()
const mergedObj = Object.assign({}, obj1, obj2); // here Object.assign() is a method that merges the properties of obj1 and obj2 into a new object, so mergedObj is a new object that has properties a, b, c, and d with their respective values
console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }   
// Spread Operator for Objects
const obj3 = { ...obj1, ...obj2 };   // here ... is the spread operator that spreads the properties of obj1 and obj2 into a new object, so obj3 is a new object that has properties a, b, c, and d with their respective values
console.log(obj3); // Output: { a: 1, b: 2, c: 3, d: 4 }
// Object Destructuring
const { name, age } = person; // here { name, age } is destructuring the person object to extract the properties name and age into variables with the same names
console.log(name); // Output: John
console.log(age); // Output: 31
// Nested Objects
const student = { // here student is an object with properties name, age, and address, and address is a nested object
    name: 'Alice',
    age: 22,
    address: {
        street: '123 Main St',
        city: 'New York',
        zip: '10001'
    }
};
console.log(student.address.city); // Output: New York
// Iterating Over Object Properties and Values
for (const key in student) { // here for is a loop that iterates over the properties of the student object
    console.log(key); // Output: name, age, address
    console.log(student[key]); // Output: Alice, 22, { street: '123 Main St', city: 'New York', zip: '10001' }
}   
Object.keys(student).forEach(key => { // here Object.keys() is a method that returns an array of the keys of the student object, and forEach() is a method that iterates over the array
    console.log(`${key}: ${student[key]}`); // Output: name: Alice, age: 22, address: [object Object]
});
// Object Methods
// Object.freeze() - Prevents modification of an object
const frozenPerson = Object.freeze({ name: 'Bob', age: 28 }); // here Object.freeze() is a method that prevents modification of the frozenPerson object
frozenPerson.age = 29; // This will not change the age property
console.log(frozenPerson.age); // Output: 28 (remains unchanged)
// Object.seal() - Prevents adding or removing properties, but allows modification of existing properties
const sealedPerson = Object.seal({ name: 'Charlie', age: 35 }); // here Object.seal() is a method that prevents adding or removing properties from the sealedPerson object
sealedPerson.age = 36; // This will change the age property
console.log(sealedPerson.age); // Output: 36    
sealedPerson.email = '0mPnI@example.com'; // This will add a new property to the sealedPerson object
console.log(sealedPerson.email); // Output: 0mPnI@example.com       
delete sealedPerson.name; // This will not delete the name property
console.log(sealedPerson.name); // Output: Charlie (remains unchanged)
// Object.is() - Compares two values for equality
console.log(Object.is('foo', 'foo')); // Output: true
console.log(Object.is({}, {})); // Output: false (different objects)
console.log(Object.is(NaN, NaN)); // Output: true (NaN is considered equal to itself)
// Object.getOwnPropertyDescriptor() - Returns property descriptor for an object property
const descriptor = Object.getOwnPropertyDescriptor(person, 'name'); // here Object.getOwnPropertyDescriptor() is a method that returns the property descriptor for the name property of the person object
console.log(descriptor); // Output: { value: 'John', writable: true, enumerable: true, configurable: true }
// Object.getOwnPropertyNames() - Returns an array of all properties (including non-enumerable) of an object
console.log(Object.getOwnPropertyNames(person)); // Output: ['name', 'age', 'greet']
// Object.getPrototypeOf() - Returns the prototype of an object
console.log(Object.getPrototypeOf(dog)); // Output: { type: 'Animal', speak: [Function: speak] } (the prototype of the dog object is the animal object)
// Object.setPrototypeOf() - Sets the prototype of an object
Object.setPrototypeOf(dog, { type: 'Canine' }); // here Object.setPrototypeOf() is a method that sets the prototype of the dog object to a new object with type 'Canine'
console.log(dog.type); // Output: Canine (the prototype of the dog object has been changed)
// Object.prototype - The prototype object for all objects
console.log(Object.prototype); // Output: { constructor: [Function: Object], hasOwnProperty: [Function], ... } (the prototype object for all objects contains common methods like hasOwnProperty, toString, etc.)
// Conclusion
// JavaScript objects are powerful data structures that allow you to store and manipulate data in a structured way.
// Understanding objects and methods is essential for mastering JavaScript, as they form the foundation of most applications.
// This guide covered the fundamental concepts of JavaScript objects, including creation, property access, methods, inheritance, and various built-in methods for object manipulation.
// By mastering these concepts, you will be well-equipped to work with JavaScript objects in your applications.