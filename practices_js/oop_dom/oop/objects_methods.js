// Object Methods and Properties in JavaScript
const person = {
    name: "Alice",
    age: 30,
    displayInfo: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
};

person.displayInfo(); // Output: Name: Alice, Age: 30

// Adding a method to an existing object
person.sayHello = function() {
    console.log(`Hello, my name is ${this.name}.`);
};

person.sayHello(); // Output: Hello, my name is Alice.

// Using Object.keys() to get an array of property names
const keys = Object.keys(person);
console.log(keys); // Output: ['name', 'age', 'displayInfo', 'sayHello']
// Using Object.values() to get an array of property values
const values = Object.values(person);
console.log(values); // Output: ['Alice', 30, [Function: displayInfo],
// [Function: sayHello]]
// Using Object.entries() to get an array of key-value pairs
const entries = Object.entries(person);
console.log(entries); // Output: [['name', 'Alice'], ['age', 30],
// ['displayInfo', [Function: displayInfo]], ['sayHello', [Function: sayHello]]]
// Using Object.assign() to copy properties from one object to another
const anotherPerson = {};
Object.assign(anotherPerson, person);
console.log(anotherPerson); // Output: { name: 'Alice', age: 30
    