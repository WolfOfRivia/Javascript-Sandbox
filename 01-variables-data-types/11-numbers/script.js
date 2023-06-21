const num = 5;

console.log(num, typeof num);

// You can also have number objects
const numObj = new Number(5);

// BTW Brad covered this earlier, this also works for strings
// const strObj = new String('Hello');
// The above is a string object

// Returns 5 as an object
// console.log(numObj, typeof numObj);

let x;

x = num.toString();

// Returns '5' as a string
console.log(x);

// You cannot call length on a number to get how many digits
x2 = num.length;
// returns undefined
console.log(x2);

// You can however turn it to a string and get the number of digits that way
x3 = num.toString().length;
// returns 1
console.log(x3);

// Specify the number of decimal points with toFixed() It takes a number as an argument for number of decimal points
x4 = num.toFixed(2);
// Returns 5.00
// However using toFixed also turns it into a string
console.log(x4);

let a = new Number(5.45896);
// Returns 5.46, It rounds it up.
console.log(a.toFixed(2))

// Return certain amount of digits with toPrecision(), takes a number as an argument like toFixed
let b = new Number(7.7234);

// Returns 7.7
console.log(b.toPrecision(2));
// Returns 7.72
console.log(b.toPrecision(3));

// To Exponential, I'ma be honest I don't understand this shit..
x5 = num.toExponential(2);
// Returns 5.00e+0
console.log(x5);

x6 = num.toLocaleString('en-US');
// Returns 5
console.log(x6);

