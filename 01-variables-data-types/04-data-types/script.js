// Data Types

// Primative Types
// Stings - Sequence of characters, Must be in quotes or backticks
// Numbers - Integers as well as floating-point numbers
// Boolean - logical entity / true or false
// Null - Intentional absence of any object value (Remember this is INTENTIONAL)
// Undefined - A variable that has not been defined / assigned (Opposite of NULL this is NOT intentional)
// Symbol - Built-in object whose constructor returns a unique symbol
// BigInt = Numbers that are greater than the "Number" type can handle (REALLY large numbers)

// Reference Types (Objects)
/*
  Reference types or "objects" are a non-primitive value and when
  assigned to a variable, the variable is given a reference to that value.

  Object literals, arrays and functions are all reference types.
*/

// Brad references TypeScript in this segment, look into it at some point.

// In depth look at all these data types

// Strings
const  firstName = 'Sarah';
const output = firstName;

// Not only logs the value of the varible but tells you it's datatype as well.
console.log(firstName, typeof firstName);
// Same result
// console.log(output, typeof output);

// Numbers
const age = 30;
const temp = 98.9;

console.log(age, typeof age);
// Still returns a number
console.log(temp, typeof temp);

// Boolean
const hasKids = true;
const hasGrandKids = false;

console.log(hasKids, typeof hasKids);
console.log(hasGrandKids, typeof hasGrandKids);

// Null
// Perhaps this individual live in a house, so there would be no apartment number this would be set to null
const aptNumber = null;

// This will tell you that null is an object however it isn't
console.log(aptNumber, typeof aptNumber);

// For more information
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

// Undefined
let score;

// Both the value and datatype will return undefined
console.log(score, typeof score);

// Symbol
const id = Symbol('id');
console.log(id, typeof id);

// BigInt
const n = 9007199254740991n;
console.log(n, typeof n);

// Reference types

// array
const numbers = [1, 2, 3, 4];

// Will return "object" instead of array, any reference type will be called an object
console.log(numbers, typeof numbers);

// object literal
const person = {
  name: 'Adrian'
}

console.log(person, typeof person);

// function
function sayHello() {
  console.log('Hello');
}

// This does however return a datatype of function but it's still an object
console.log(sayHello, typeof sayHello);

