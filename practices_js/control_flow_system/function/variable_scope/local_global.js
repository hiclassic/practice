//clear concept of local and global variables in JavaScript with examples
// Local and Global Variables in JavaScript
// Local variables are defined within a function or block and can only be accessed within that scope.
// Global variables are defined outside of any function or block and can be accessed from anywhere in the code. 
// Global variables are typically declared using the var keyword, while local variables are typically declared using let or const.
// Example of Local and Global Variables
let globalVar = "I am a global variable"; // Global variable
function exampleFunction() {
    let localVar = "I am a local variable"; // Local variable
    console.log(localVar);
}   
exampleFunction(); // Output: I am a local variable
console.log(globalVar); // Output: I am a global variable
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined (local
// variable cannot be accessed outside the function)
// Example of Local and Global Variables with var
let globalVarWithVar = "I am a global variable with var"; // Global variable
function exampleFunctionWithVar() {
    let localVarWithVar = "I am a local variable with var"; // Local variable
    console.log(localVarWithVar);
}
exampleFunctionWithVar(); // Output: I am a local variable with var
console.log(globalVarWithVar); // Output: I am a global variable with var
// console.log(localVarWithVar); // Uncaught ReferenceError: localVarWithVar is
// not defined (local variable cannot be accessed outside the function)
// Example of Local and Global Variables with let and const
let globalLetVar = "I am a global variable with let"; // Global variable
function exampleFunctionWithLet() {
    let localLetVar = "I am a local variable with let"; // Local variable
    console.log(localLetVar);
}
exampleFunctionWithLet(); // Output: I am a local variable with let
console.log(globalLetVar); // Output: I am a global variable with let
// console.log(localLetVar); // Uncaught ReferenceError: localLetVar is not defined
// (local variable cannot be accessed outside the function)     

// Example of Local and Global Variables with const
const globalConstVar = "I am a global variable with const"; // Global variable
function exampleFunctionWithConst() {
    const localConstVar = "I am a local variable with const"; // Local variable
    console.log(localConstVar);
}
exampleFunctionWithConst(); // Output: I am a local variable with const
console.log(globalConstVar); // Output: I am a global variable with const
// console.log(localConstVar); // Uncaught ReferenceError: localConstVar is not
// defined (local variable cannot be accessed outside the function) 
// Summary:
// - Local variables are defined within a function or block and can only be accessed within that scope
// - Global variables are defined outside of any function or block and can be accessed from anywhere in the code
// - Global variables are typically declared using the var keyword, while local variables are typically declared using let or const
// - Local variables cannot be accessed outside of their function or block, while global variables can be accessed from anywhere in the code
// - Using let and const for local variables is recommended for better block scoping and to avoid issues with variable hoisting
// - Avoid using global variables unless necessary, as they can lead to unexpected behavior and make code harder to maintain
// - Use local variables whenever possible to limit the scope and avoid conflicts with other variables
// - Be cautious when using global variables, as they can be modified from anywhere in the code, leading to potential bugs
// - Use descriptive names for global variables to avoid confusion and conflicts with local variables
// - Consider using modules or namespaces to encapsulate global variables and avoid polluting the global scope
// - Use strict mode ('use strict') to catch potential issues with global variables and enforce better coding practices
// - Always initialize variables before using them to avoid undefined behavior
// - Use const for variables that should not be re-assigned, and let for variables that may change
// - Avoid using var for global variables, as it can lead to unexpected behavior due


//real world examples of global and local variables;Call the function to increment the counter again    
let counter = 0;    
function incrementCounter() {
    counter++; // Increment the global counter variable
    console.log("Counter:", counter); // Output the current value of the counter
}
incrementCounter(); // Call the function to increment the counter
incrementCounter(); // Call the function to increment the counter again

// Example of a global variable used in a real-world scenario
let appName = "My Application"; // Global variable representing the application name
function displayAppName() {

    console.log("Application Name:", appName); // Access the global variable
}
displayAppName(); // Call the function to display the application name  
// Example of a local variable used in a real-world scenario
function calculateSum(a, b) {
    let sum = a + b; // Local variable to store the sum of a and b
    console.log("Sum:", sum); // Output the sum
}
calculateSum(5, 10); // Call the function with arguments 5 and 10
// calculateSum(5, 10, 15); // This would still work, but
// the third argument would be ignored since the function only uses the first two parameters
// Example of a global variable used in a real-world scenario with a counter
let globalCounter = 0; // Global variable to keep track of the counter
function incrementGlobalCounter() {
    globalCounter++; // Increment the global counter variable
    console.log("Global Counter:", globalCounter); // Output the current value of the global counter
}
incrementGlobalCounter(); // Call the function to increment the global counter
incrementGlobalCounter(); // Call the function to increment the global counter again 