// while loop

// while(true/1/2/3/...){
//     console.log("Hello World!");
//     This is a Infinity loop that is always true and never false;
//     browser runs it a millions automatically and crush anyhow! So, don't try with infinity loop;
// };

// while(false/0){
//     console.log("Hello World!");
// }

var i = 1;
while( i <= 5){
    console.log("Value of i: " + i);
    i++;
};
console.log(" out of the loop!");

// Or, we can declar while loop by followings way too!

var i = 1;
do {
    console.log("Value of i: " + i);
    i++;
} while( i <= 5);
console.log(" out of the loop!");

// Printing 1 to 10 by using while loop;

var i = 1;
while( i <= 10){
    console.log("Value of i: " + i);
    i++;
};
console.log(" out of the loop!");

var i = 1;
while( i <= 10){
    if ( i ===4 ){
      console.log("Value of i: " + i);  
    }
    console.log( i);
    i++;
};
console.log(" out of the loop!");

// Sum of 1 to 10

var i = 1;
var sum = 0;
while ( i <= 10){
    sum = sum + i;
    i++;
}
console.log("Result: " + sum);

// Factorial with while loop!
// finding  the value of 10! 

var i = 1;
var product = 1;

while( i <= 10){
    product *= i;
    i++;
}
console.log("The result of 10! is: " + product)