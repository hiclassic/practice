// Decimale Number

var x;
x =3.1416;
console.log(x);
var x = 123e5;
console.log(x);
console.log(123e-5);
console.log( "concatina" + "tion");
console.log( "concatina" + "99" + "88");
console.log( "99" + "88" + "toma");
console.log( 99 + 88 + "toma");
console.log( "90" - "50");
console.log( "90" * "50");
console.log( "90" / "50");
console.log( "90" % "50");
console.log( "90" + "50");
console.log( 25 / 0 );


// hexa_decimale to octal to binary convert Number

var a = 0xBB;
console.log(a);
var y = a.toString();
console.log(y);
var j =127;

// number to string

console.log(j.toString(2));
console.log(j.toString(8));
console.log(j.toString(16));

// Permissions

var u = 97.44456982655;
console.log(u.toPrecision());
console.log(u.toPrecision(2));
console.log(u.toPrecision(3));
console.log(u.toPrecision(4));
console.log(u.toPrecision(5));

// string to number

var m = "12365"
console.log(parseInt(m));
var s = "69.21586";
console.log(parseInt(s));
console.log(parseFloat(s));
console.log(parseInt(s.toString(s)));

// is not a number

var h = "jhsddbs";
console.log(isNaN(h));
var t = 136;
console.log(isNaN(t));
var r = "1235kjhi"
console.log(isNaN(r));

