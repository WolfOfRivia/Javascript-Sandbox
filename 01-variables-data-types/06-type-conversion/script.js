let amount = '100';
console.log(amount, typeof amount);

// convert string to number with parseInt
// amount = parseInt(amount);
// console.log(amount, typeof amount);

// convert string to number with unary operator
// Brad like this method
// amount = +amount;
// // console.log(amount, typeof amount);

// convert string to number with number constructor
amount = Number(amount)
console.log(amount, typeof amount);

// Convert number to string with toString()
// let numToStr = 120;
// numToStr = numToStr.toString();
// console.log(numToStr, typeof numToStr);

// Convert number to string with String constructor
// let numToStr = 120;
// numToStr = String(numToStr);
// console.log(numToStr, typeof numToStr);

// Convert string to decimal
let num1 = 99.5;

// You'll use parseFloat, parseInt will remove the decimal.

// Returns 99
// num1 = parseInt(num1);

// Returns 99.5
num1 = parseFloat(num1);
console.log(num1, typeof num1);

// Convert number to boolean
let num2 = 0;
num2 = Boolean(num2);

// This is called a truthy value, with booleans you know 0 equals false and 1 equals true;
// In this case if num2 is any number above 0 it will always be true, negative numbers throw an error

// Returns false
console.log(num2, typeof num2);
