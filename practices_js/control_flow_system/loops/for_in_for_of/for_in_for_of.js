
let name = "I am learning javascript!";
let food = ["cake", "chocolate","Ice cream" ];

// object doesn't have index;
let person = {
    Name:"shakib al hasan",
    profession: "student",
    class: "two",
    roll: 1,
    id: 123659,
    age:7,
};

// for in string/array/object;
//  we will get index;


for( var x in name){
    // console.log(name);
    console.log(`index ${x} and item ${name[x]}`);
};

//  for of string/array;
//  we will get items/value;
for ( var x of name){
    console.log(x);
};


for( var y in food){
 
    console.log(`index ${y} and item ${food[y]}`);
};

for( var y of food){
   
    console.log(y);
};


for ( var obj in person ){
    console.log(`Property: ${obj} 
        value: ${person}`);
}

// we don't iterate object with for_of ;

// for ( var i of person){
//     console.log(x);
// }

