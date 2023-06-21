let x;

const name = 'Sammy';
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

console.log(x);

// Template Literals
x2 = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(x2);

// String Properies and Methods

const s = 'Hello World';

// Get string length
x3 = s.length;

// Returns 11
console.log(x3);

// Access value by key
x4 = s[1];

// Returns e
console.log(x4);

// See all the methods you can call on strings
// x5 = s.__proto__;
// console.log(x5);

// Capitalize every letter
x6 = s.toUpperCase();

// Returns 'HELLO WORLD'
console.log(x6);

// lowercase every letter
x7 = s.toLowerCase();

// Returns 'hello world'
console.log(x7);

// Get character at specific index with charAt()
x8 = s.charAt(2);

// returns l
console.log(x8);

// Get the index of a specific character with indexOf()
x9 = s.indexOf('o');

// Returns 4
console.log(x9);

x10 = s.indexOf('e');
// Returns 1 because this is getting the FIRST instict of the letter e
console.log(x10);

// Get a segment of a string with Substring()
x11 = s.substring(1, 5); 
// Returns ello it started at index 1 of the string and stopped at index 5
console.log(x11);

x12 = s.substring(7);
// Returns orld it started at index 7 and continued until the string ends.
console.log(x12);

// Get a segment of a string with Slice()
// Works the same as Substring() but can start at the end and use negative numbers
x13 = s.slice(-11, -6);
// Returns Hello it started at the end of the string hello world which has 10 characters so -11, and continued to -6
// So it cut out everything after Hello
console.log(x13);

// Remove white space with Trim()
x14 = '            Hello World';
// Logs the string with long white space
console.log(x14);

x15 = x14.trim();
// Log the string without white space
console.log(x15);

// Replace characters with the replace() method
x16 = s.replace('World', 'John'); // First argument is segment being replaced, Second argument is what is replacing it
// Returns Hello John
console.log(x16);

// Check if a string includes another string with includes() will return true or false
x17 = s.includes('hello');
// Returns false because it IS case sensitive. 
console.log(x17);

x18 = s.includes('helli');
// Also returns false because this string does not exist within the string being checked
console.log(x18);

// Return the true primitive of a string with valueOf()
x19 = s.valueOf();
// Returns Hello World
console.log(x19);

// Turn a string into an array with split() take an argument of separator, could be ' ', ',', '|' whatever is in the string
x20 = s.split(' '); // Split by word using a space
// Returns ['Hello', 'World']
console.log(x20);

x21 = s.split(''); // Split by character using quotes
// Returns ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
console.log(x21);