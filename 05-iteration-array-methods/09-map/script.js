// The map method creates a new array populated with the results of the called function on each element

// MDN Example
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);
// We took each element in array1 and multiplied them by 2 then stored the results in a new array called map1

console.log(map1) // logs [2, 8, 18, 32];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);

// You can do just about anything with the elements in the array
const numberWithStr = numbers.map((number) => 'Number ' + number);

console.log(numberWithStr); // logs ['Number 1', 'Number 2', 'Number 3', 'Number 4', 'Number 5']

// Triple the numbers
const tripled = numbers.map((number) => number * 3);

console.log(tripled) // logs [3, 6, 9, 12, 15]

// Same results with foreach
const feTripled = [];
numbers.forEach((number) => {
  feTripled.push(number * 3);
})

console.log(feTripled); // logs [3, 6, 9, 12, 15]
// As you can see if I wanted to do something like this array.map() is a much more efficient way.

// Lets take those same companies from the last lesson.
const companies = [
  {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
  {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
  {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
  {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
  {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
  {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
  {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
  {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
  {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
];

// Create an array of company names
const companyNames = companies.map(company => company.name);

console.log(companyNames); // Logs an array of just the company names

// Create a new object that has just the company and the category
const compInfo = companies.map(company => {
  return {
    name: company.name,
    category: company.category
  }
})

// Originally when trying this I got it wrong, I had the right idea opening up curly braces and adding object properties, BUT i missed the return keyword
console.log(compInfo);

// Lines 55 through 60 is example of you might have a lot of data but you don't need it all, so it's a good way of stripping out some of redundant data.

// Create an array of the length of years for each company
const compTotalYears = companies.map(company => company.end - company.start);

console.log(compTotalYears); // Logs the total length of company years

// Create an array objects with the name and the length of years for each company
const compInfo2 = companies.map(company => {
  return {
    name: company.name,
    totalYears: company.end - company.start + ' years'
  }
})

console.log(compInfo2);

// Chaining map methods

// Take a number, get the square root, then double it
const squareAndDouble = numbers
  .map(number => Math.sqrt(number))
  .map(sqrt => sqrt * 2);

// when chaining a method to make it more readable, it's common to do each map on a different line
// also use a new variable name at the start of each new map because remember the content returned has now changed.
// In this case I started with a number, then got the square roots, since the new array is now a bunch of square roots it only made sense to use that name next
// You can chain as many maps as you want

console.log(squareAndDouble);

// To better understand what happened on lines 85 through 87 this is the longer version
const squareAndDouble2 = numbers
  .map(function(number) {
    return Math.sqrt(number);
  })
  .map(function(sqrt) {
    return sqrt * 2;
  });

  console.log(squareAndDouble2);

// You can chain with other methods as well it doesn't have to be just map

// Take an array of numbers filter out the even numbers, then double the even numbers
const evenDoubled = numbers
  .filter(number => (number % 2) === 0) // first we got the even numbers using filter
  .map(evenNums => evenNums * 2); // then we took the even numbers and doubled them

console.log(evenDoubled); // returns [4, 8, 12, 16, 20]

