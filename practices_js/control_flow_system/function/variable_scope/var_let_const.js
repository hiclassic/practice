// Variable Scope in JavaScript
// Understanding variable scope is crucial for writing effective JavaScript code.
// There are three types of variable declarations in JavaScript: var, let, and const.

// variable scope
// The scope of a variable determines where it can be accessed and modified.
// Variables declared using var have function scope, meaning they are accessible within the function where they are defined.
// Variables declared using let and const have block scope, meaning they are only accessible within the block where they are defined.
// Variables declared using const are also block scoped, but they cannot be re-assigned once they are initialized.  
// This means that const variables must be initialized at the time of declaration.

// Example of variable scope
function exampleFunction() {
    var x = 10;
    let y = 20;
    const z = 30;

    if (true) {
        var x = 40; // Same variable, function-scoped
        let y = 50; // Different variable, block-scoped
        const z = 60; // Different variable, block-scoped
        console.log(x); // Output: 40
        console.log(y); // Output: 50
        console.log(z); // Output: 60
    }

    console.log(x); // Output: 40
    console.log(y); // Output: 20
    console.log(z); // Output: 30
}
exampleFunction();  
// In the example above, the variable `x` is declared using `var`, so it is function-scoped and can be accessed both inside and outside the if block.
// The variable `y` is declared using `let`, so it is block-scoped and can only be accessed within the if block.
// The variable `z` is declared using `const`, so it is also block-scoped and cannot be re-assigned.
// The output demonstrates the differences in variable scope and how `var`, `let`, and `const` behave differently in terms of accessibility
// and re-assignment.   

// Summary:
// - `var` is function-scoped and can be re-assigned.
// - `let` is block-scoped and can be re-assigned.
// - `const` is block-scoped and cannot be re-assigned after initialization.    
// - Understanding variable scope is essential for writing effective JavaScript code.
// - Use `let` and `const` for better block scoping and to avoid issues with variable hoisting.

// - Use `const` for variables that
//   should not be re-assigned, and `let` for variables that may change.
// - Avoid using `var` unless necessary, as it can lead to unexpected behavior due to
//   function scoping and hoisting.