// Challenge 1

/*
  Create a function called getCelsius() that takes a temperature in Fahrenheit as an argument
  and returns the temparture in celsius

  bonus points for writing it in a one line arrow function
*/

// Function Declaration
// function getCelsius(temp) {
//   return ((temp - 32) * 5 / 9).toFixed(0);
// }

// Arrow Function
const getCelsius = temp => ((temp - 32) * 5 / 9).toFixed(0)

console.log(`The Temperature is ${getCelsius(98)} \xB0C`);

// Challenge 2
/* 
  Create an arrow function called minMax() that takes in an array of numbers and 
  returns an object with the mininum and maximum numbers in the array.

  expected result console.log(minMax([1, 2, 3, 4, 5]))
  // {min: 1, max: 5};
*/

var myArray = [3, 17, 99, 123, 44, 2, 95];

function minMax(arr) {
  
  // const nums = {
  //   min: Math.min(...arr),
  //   max: Math.max(...arr)
  // }

  // return nums;

  // I didn't even have to make the code like how I did above I could have just did this
  return {
    min: Math.min(...arr),
    max: Math.max(...arr)
  }

}

console.log(minMax(myArray));

// Challenge 3
/*
  Create an IIFE (Immediately Invoked Function Expression) that takes
  in the length and width of a rectangle, and outputs to the console as soon as the 
  page loads

  // Expected result
  The area of a rectangle width a length of 10 and width of 5 is 50.
*/

// Get Area
// (function (l, w) {
//   const area = l * w;
//   console.log(`The Area of a rectangle with a length of ${l} and width of ${w} is ${area}.`);
// })(10, 20);

// You can also do an arrow function
((l, w) => {
  const area = l * w;
  const output = `The Area of a rectangle with a length of ${l} and width of ${w} is ${area}.`;
  console.log(output);
})(25, 60);

// let x = 100;
// let y = 50;
// function getSum(n1, n2) {
//   let sum = n1 + n2;
//   console.log(sum);
//   return sum;
// }

// let sum1 = getSum(x, y);
// let sum2 = getSum(10, 20);
