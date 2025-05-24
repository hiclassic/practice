var countries = ["Bangladesh", "USA", "UK"];
console.log(countries);
console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);
console.log(countries.length);

countries[1] = "poland";
console.log(countries);
countrie = countries[0];
console.log(countrie);
countries[3] = "Norway";
console.log(countries);
console.log(countries[10]);
countries[countries.length] = "Swiden";
console.log(countries);
console.log(countries[4]);
console.log(countries.push("China"));
console.log(countries.push("China", "India"));
console.log(countries.pop("poland"));
console.log(countries.shift());

var num = [];
console.log(num);
console.log(num.push(15));
console.log(num);
console.log(num.push("jerry",15));
console.log(num);
var x = "Dhaka";
var y = x.split("");
console.log(y);
var x = "Bangladesh";
var y = x.split();
console.log(y);

// string to array
var s = "hello 'world' boy"
console.log(s.split(""));
var h = " Bangladesh is a beautiful country"
console.log(h.split("a"));
var j = "toma, thiyhi, lili,dolly";
console.log(j.split(","));

// array to string

var i = ["dhaka", "Bogra", "Rangpur"];
console.log(i.toString());
var o = " Bangladesh is a beautiful country";
console.log(i.concat(o));
var p = o.toString("");
console.log(p);
var i = o.split("");
console.log(i);
console.log(i.toString());
var k = " You Love Me";
// console.log(k.join("/"));

var t = ["bangladesh", "nepal", "argintina", "india", "malay"];
console.log(t.sort());
console.log(t.reverse());