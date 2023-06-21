// Key differences between forEach and filter and the other high order array methods is that
// They usually return something (a modified array)

// Filter creates a shallow copy of an array filtered down to elements that pass the given test

const words = ['spray', 'limit', 'elite', 'exuberant', 'destrustion'];

const results = words.filter(word => word.length > 6); // filtering out the words that don't pass this test

console.log(results); // Returns ['exuberant', 'destruction'] In our new array only words with more than 6 letters are stored

const arr = [5, 83, 92, 75, 50, 24, 77, 20, 102, 1015];
// Get all number that are divisible by 5
const byFive = arr.filter(five => five % 5 === 0);

console.log(byFive); // returns [5, 75, 50, 20, 1015]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter out all the odd numbers
// BTW this is the long way of doing this
// const evenNumbers = numbers.filter(function(number) {
//   return number % 2 === 0;
// });

// The short way
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// You can do this with forEach as well
const evenNumbs = [];
numbers.forEach((num) => {
  if(num % 2 === 0) {
    evenNumbs.push(num);
  }
})

console.log(evenNumbs);

// Let's do something harder we will take an array of company objects
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

// Get only retail companies
const retail = companies.filter(company => company.category === 'Retail');
console.log(retail);

// Get companies that started in or after 1980 and ended in or before 2005
const defunct = companies.filter((comp) => {
  return comp.start >= 1980 && comp.end <= 2005;
})

// This works too
// const defunct = companies.filter(comp => comp.start >= 1980 && comp.end <= 2005);

console.log(defunct);

// Get companies that lasted 10 years or more
const tenures = companies.filter(comp => (comp.end - comp.start) >= 10); // The parentheses before comp.end and after comp.start weren't necessary

console.log(tenures);