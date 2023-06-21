// function add(a, b) {
//   return a + b;
// }

// Arrow function syntax
const add = (a, b) => {
  return a + b;
}

// We can make the function shorter since we are only returning a value
const subtract = (a, b) => a - b;
// we didn't specify the return keyword but it's still returning a value (Implicit Return)

// Another thing is if your function has ONLY ONE parameter
const double = a => a * 2; // Your parameter doesn't need parentheses around it

// Returning an object this can cause confusion
// const createObj = () => {
//   name: 'Joe'; // Some text editors might add a semi-colon and when running this function you'll get an undefined
// }

// A way to solve this to return the object is sound the curly braces with parentheses
const createObj = () => ({
  name: 'Joe',
});

console.log(add(1, 2));
console.log(subtract(10, 2));
console.log(double(10));
console.log(createObj());

// High order array method or callbacks (just a few examples of areas that are great for arrow functions)
const numbers = [1, 2, 3, 4, 5];

// A for each loop
// numbers.forEach(function(n) {
//   console.log(n);
// })

// You can shorten this with an arrow function in a callback
numbers.forEach(n => console.log(n))

// Callbacks just mean passing a function into another function 
// Of course all this is preference, you write code how you want