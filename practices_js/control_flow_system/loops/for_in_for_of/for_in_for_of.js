
let name = "I am learning javascript!";
let food = ["cake", "chocolate","Ice cream" ];
let person = {
    Name:"shakib al hasan",
    profession: "student",
    class: "two",
    roll: 1,
    id: 123659,
    age:7,
};

// for in string/array/object;

for( var x in name){
    console.log(name);
    console.log(`index ${x} and item ${name[x]}`);
}