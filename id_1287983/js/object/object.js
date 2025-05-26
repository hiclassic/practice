// create an object
let mobile ={
    brand: "SAMSUNG",
    color: "red",
    model: "T120",
    'update version':"9:4:0",
}
console.log(mobile);
console.log(mobile.brand);
console.log(mobile.color);
console.log(mobile.model);
console.log(mobile['update version']);

// object properity update
mobile.brand= "iPhone",
console.log(mobile.brand)
// Object.freeze(mobile);
mobile.color ="black",
console.log(mobile.model + mobile.color);

// create an method
// function info(){
//     return "this is a function"
// };

const person = {
    firstName: "Assad",
    lastName: "Ahmed",
    id : 1287469,
    fullname: function(){
        return this.firstName + " "+this.lastName;
    }
}
// function fullname (){
//     return person.firstName + " "+ person.lastName;
// }
// fullname();
console.log(person);
console.log(person.firstName+ " " + person.lastName+ " "+ person.id);
console.log(person.fullname());


const car ={
  make: 'Ford',
  model: 'Mustang GT',
  year: 2021,
  color: 'Red',
  fuelLevel: 50,
  start:function(){
    return this.model+" Engine started"+ this.year;
},
drive:function(){
    return this.model+" the car is running"+ this.year;
},
stop:function(){
    return this.model+" the car is stop now"+ this.year;
},
}
  console.log(car.start());
  console.log(car.drive());
  console.log(car.stop());