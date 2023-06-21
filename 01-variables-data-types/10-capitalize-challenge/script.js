// Capitalize first letter in string challenge

// Objective capitalize the d in developer return it in a new string

// My solution
const myString = 'developer';
const capital = myString.charAt('0').toUpperCase();
let myNewString = myString.replace(myString.charAt('0'), capital);

// Returns Developer
console.log(myNewString);

// Brad's Solutions

// Initialize Variable
let bradNewString;

// Solution 1:
// I didn't even think about concatenating
bradNewString = myString.charAt('0').toUpperCase() + myString.substring(1);
// console.log(bradNewString);

// Solution 2
bradNewString = myString[0].toUpperCase() + myString.substring(1);
// console.log(bradNewString);

// Solution 3 Template Literal
bradNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;
// console.log(bradNewString);

// Solution 4 Same as 3 but you could also use slice
bradNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;
console.log(bradNewString);

// My solution wasn't wrong but these are better