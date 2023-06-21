// Reduce is used to reduce arrays down to a single value

// An example of this is a shopping cart, taking the price of all the elements in the cart
// and reducing it down to one total 

// Simple example
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Lets get the sum of all these numbers

// Long version first
const sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // 0 is our initial value

/*
  Here's what happened:
  the loop started at 0 then went to 1, it took 1 and added it to 0 which equals 1
  then it moved to the next accumulator in the array which would now be 2, it took 2 and added it to 1 (current value) which equals 3
  then on to the next accumulator 3, it took 3 added to our current value which is now 3 that equals to 6
  then on to the next acc which is now 4, 4 + current value (6) = 10
  on to the next acc 5, 5 + current (10) = 15 etc it repeated this until it reached the end of the array
*/

console.log(sum); // 55

// Short version
const sum2 = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum2); // 55

// If we took the initial value and changed it to 10
const sum3 = numbers.reduce((acc, curr) => acc + curr, 10);

console.log(sum3); // 65
// This is now 65 because before starting the loop the value began at 10
// So 10 + 1 = 11
// 11 + 2 = 13
// 13 + 3 = 16 and so on until it reaches the end of the array

// Example of doing the same thing using a for loop
let sum4 = 0;
numbers.forEach((number) => {
  return sum4 += number;
})

console.log(sum4);

// Brad showed an example using a function expression
const sum3Func = () => {
  let acc = 0;
  // He also used a for of loop
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
}

console.log(sum3Func()) // 55

// Shopping Cart Example (Real World Example of reduce in use)

const cart = [
  {id: 1, name: 'Product 1', price: 130},
  {id: 2, name: 'Product 2', price: 150},
  {id: 3, name: 'Product 3', price: 170},
]

// Get total of prices in the shopping cart
// const total = cart.reduce((acc, curr) => acc.price + curr.price, 0); // I was trying.... I had the right idea the .price after acc and problem solved

const total = cart.reduce((acc, product) => {
  return acc + product.price;
}, 0);
console.log(total); // 450

// Also Brad called the current value a product which makes logical sense since this a shopping cart