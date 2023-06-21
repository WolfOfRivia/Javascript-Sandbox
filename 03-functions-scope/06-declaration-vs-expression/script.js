// Fuction Declaration
function addDollarSign(value) {
  return '$' + value;
}
// Start off with the keyword function then name your function

// logs $100
console.log(addDollarSign(100));

// Expression is a function that is assigned to a variable
const addPlusSign = function(value) {
  return '+' + value;
}; // Add a semi-colon to the end of a function expression, not required for function declaration

// We called the functions the same way but declared them different
console.log(addPlusSign(200));

// There are differences, it involves hoisting look more into that