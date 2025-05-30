// Sum of the series of square numbers!

var n =parseInt(prompt("Enter your number of terms: "));
var sum = 0;
var series = [];

for (var i = 1; i <= n; i++) {
//   sum += i*i/2;
//   console.log(i*i);

  sum += i ** 2;
  series += (i ** 2).toString();
  if (i == n) {
    // continue;
    break;
  }
   series += " + ";
}
// console.log(series);
// console.log(sum);
console.log(`${series} = ${sum}`); 