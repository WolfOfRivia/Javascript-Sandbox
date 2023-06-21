const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// Adding berries to the fruits array
// fruits.push(berries);

// console.log(fruits);

// Access nested array
// x = fruits[3];
// console.log(x);

// Access element inside nested array
// x1 = fruits[3][1];
// console.log(x1);

// Create a new array and nest both fruits and berries
const allFruits = [fruits, berries];
console.log(allFruits);

// Let's log strawberry
x2 = allFruits[1][0];
console.log(x2);

// There's no limit to nesting, you can nest as many elements as you want

// Concatenating arrays
// Lets turn fruits and berries into one single array

const listFruits = fruits.concat(berries);
console.log(listFruits);

// Another way is the use the Spread Operator (...)
// Can be used with both arrays and objects, it's more common among objects

x3 = [...fruits, ...berries];
// merges elements from both arrays into a single array
console.log(x3);

// If you took the spread away from berries
x4 = [...fruits, berries];
// merges elements from both arrays into a single array, HOWEVER berries is still an array itself
console.log(x4);

// Flatten Arrays
// Lets say you have an array with two nested arrays
const arr = [1, 2, [3, 4], 5, 6, [7, 8]];
// Returns the array and you'll see the two nested arrays
console.log(arr);
// Let's use flat() to make all these elements a single array
x5 = arr.flat();
// Returns [1, 2, 3, 4, 5, 6, 7, 8]
console.log(x5);

// Statics Methods on Array Object

// Check if something is an array
x6 = Array.isArray(fruits);
// Returns true
console.log(x6);

x7 = Array.isArray('Hello');
// Returns false
console.log(x7);

const list = document.querySelectorAll('li');

// Log list of elements
console.log(list);

x8 = Array.isArray(list);
// This isn't a REAL array it's a nodelist will return false
console.log(x8);

// Create an array from an array like value with .from()
x9 = Array.from('12345');

// Console will say it's an object but is an Array
console.log(x9);

// Create an array from a set of values with .of()
// Maybe you have a set of variables and you want those values in an array
// I could have used this shit on EverPrep =(
const a = 1;
const b = 2;
const c = 3;

x10 = Array.of(a, b, c);

// Returns [1, 2, 3]
console.log(x10);