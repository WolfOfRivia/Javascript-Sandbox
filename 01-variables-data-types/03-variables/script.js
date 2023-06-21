// Ways to declare a variable
// var, let, const

let firstName = 'John';
let lastName = 'Shepard';

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// This doesn't work
// let 1name = 'John';

// This DOES work
// let name1 = 'John';

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowecase

// Re-assigning Variables
age = 31;

console.log(age);

// You can also declare a variable but not assign anything yet (Can't do this with Const they must be initialized when created)
let score;

score = 1;

console.log(score);

if (true) {
  score = score + 1;
}

const x = 100;

// Will NOT work constant variables are declared once and never change
// x = 200;

// Some ways to get around const using arrays
const arr = [1,2,3,4]; // definining an array

// you cannot redefine this array with new values
// This throws an error
// arr = [1,2,3,4,5];

// You can use array functions though
arr.push(5);

console.log(arr); // gives [1,2,3,4,5]

// Same applies to objects
const person = {
  name: 'Adrian'
};

// Will NOT work
// person = 'Joe';

// This DOES work
// This works because you aren't changing the person variable but instead changing a property within the variable "name"
person.name = 'Joe';

console.log(person);

// You can also add to the object
person.email = 'adrian@email.com';

console.log(person);

// Declare multiple variables at once

// One way of doing it
// let a, b, c;
// const d = 10, e = 20, f = 30;

// You also do this way whatever helps you read better
let a,
  b,
  c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a); // returns undefined, this variable along with b and c haven't been assigned a value