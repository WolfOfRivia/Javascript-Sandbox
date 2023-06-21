// Array Literal
const numbers = [12, 45, 33, 29, 39];
console.log(numbers);

// Array Constructor
const fruits = new Array('Apple', 'Grape', 'Orange');
// Returns ['Apple', 'Grape', 'Orange'];
console.log(fruits);

// You can use either but array literal is more common

// Output specific items from array
x = numbers[0];

// Returns 12
console.log(x);

// You can do equations with them too
x1 = numbers[1] + numbers[4];

// Returns 84
console.log(x1);

// Using arrays with template strings
x2 = `My favorite fruit is an ${fruits[2]}`;

// Returns My favorite fruit is an Orange
console.log(x2);

// Arrays can have any data type in them
let person = {
  name: 'Larry',
  age: 30
}
const mixed = ['Hello', 21, true, null, person, ['rock', 'jazz', 'hip-hop']];

// Returns a lot of shit lol
console.log(mixed);

// Get number of elements in an array
let x3 = mixed.length

// Returns 6
console.log(x3);

// Update a value in an array
fruits[1] = 'Peach';

// Returns ['Apple', 'Peach', 'Orange'];
console.log(fruits);

// Array lengths can also be set
// fruits.length = 2;

// Returns ['Apple', 'Peach']
// console.log(fruits);

// Adding items to an array
// Arrays are zero based and we know fruits already has three elements so to add a fourth use the three index
fruits[3] = 'Grape';

// Returns ['Apple', 'Peach', 'Orange', 'Grape'];
console.log(fruits);

// However you won't always know how many elements are in an array, one way is using the length method
fruits[fruits.length] = 'Strawberry';

// Returns ['Apple', 'Peach', 'Orange', 'Grape', 'Strawberry'];
console.log(fruits);

// However better methods discussed later will do the same thing