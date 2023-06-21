// Create a function
function sayHello() {
  // Code body
  console.log('Hello World');
}

// run function
sayHello();

// Function parameters
// When declaring a function the information added in the parentheses are called parameters
function add(num1, num2) {
  console.log(num1 + num2);
}

// When calling a function the information added in the parentheses are called arguments
add(5, 10);

// Most of the time when creating function there is a value being returned,

// Example
function subtract(num1, num2) {
  // Use the return keyword
  return num1 - num2;
  // using return should be the absolute last thing you do in a function as it stops any futher code
}

subtract(10, 2);

// The reason for returning a value is because you plan to do something with it

// Example
const result = subtract(10, 2);

// Now you can take the returned value of subject which is stored in the variable called result and do things with it
console.log(result);

// You can also console log the function
console.log(subtract(15, 3));

// Return can also be used to just stop a function so it doesn't need to contain a value