// Global Scope
// Gobal variables are accessible from anyway the window object is an example of having a bunch of functions in the global scope

// Alert
// window.alert('test');

// Get inner width
// let x = window.innerWidth;
// console.log(x);

// Variables that are not in a function, block or object or anything are in the global scope

const x = 100;

console.log(x, 'in global');

// since x is a gobal function you can access it inside a function
function test() {
  console.log(x, 'global var inside function');
  // To rehash from lines 39 and 30 you also cannot access a variable from another function inside a function
  // It will not go outside this function and enter another to find the variable
  // Error y is not defined
  // console.log(y);
}

test();

// Inside blocks like if statements
if(true) {
  console.log(x, 'in block');
}

// Functions also have their own scope
function add() {
  const y = 50;
  // We can also override a constant variable inside a local scope using variable shadowing
  const x = 1; // x has been redefined
  console.log(y);
  console.log(x + y);
}

// This is logging a "function scoped" variable
add();

// Error because y is not defined in the global scope and that's where this function is looking
// It will not go into functions and pull out variables for access
// console.log(y);
