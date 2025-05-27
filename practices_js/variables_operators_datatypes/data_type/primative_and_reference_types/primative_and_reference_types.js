var a =10;
var b = a;
var a = 20;
console.log(b);
// primitive type data always deals with value not properities spaces;
// Number, string, boolean are primitive typeof;
// always works with different address;

let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String
console.log(x);
let s = x;
x = "done";
console.log(s);


// reference types Data;
// array, object are reference type of data;
// always works with same address;
// always deals with address;


let number = [125, 236, 145, 963, 555];
let numbers = number;
console.log(numbers);
number[2] = 999;
console.log(number);
console.log(numbers);
