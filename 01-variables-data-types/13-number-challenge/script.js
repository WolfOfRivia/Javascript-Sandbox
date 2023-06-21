// Random Number between 1 and 100
let x = Math.floor(Math.random() * 100 + 1);
// Random Number between 1 and 50
let y = Math.floor(Math.random() * 50 + 1);

let sumOutput = `${x} + ${y} = ${x + y}`;
let diffOutput = `${x} - ${y} = ${x - y}`;
let productOutput = `${x} x ${y} = ${x * y}`;
let quotientOutput = `${x} / ${y} = ${x / y}`;
let rmOutput = `${x} % ${y} = ${x % y}`;

// console.log(sumOutput);
// console.log(diffOutput);
// console.log(productOutput);
// console.log(quotientOutput);
// console.log(rmOutput);

// Brads way Again My way isn't wrong but his is a lot more readable
let sum = x + y;
sumOutput = `${x} + ${y} = ${sum}`;
let diff = x - y;
diffOutput = `${x} - ${y} = ${diff}`;
let prod = x * y;
productOutput = `${x} x ${y} = ${prod}`;
let quo = x / y;
quotientOutput = `${x} / ${y} = ${quo}`;
let rm = x % y;
rmOutput = `${x} % ${y} = ${rm}`;

console.log(sumOutput);
console.log(diffOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);