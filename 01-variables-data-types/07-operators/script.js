// Arithmetic Operators

let x;

// Addition returns 10
x = 5 + 5;
// Subtraction returns 0
x = 5 - 5;
// Multiplication Returns 25
x = 5 * 5;
// Division Returns 1
x = 5 / 5;
// Modulo Returns the remainder of 5 out of 7 which is 2
x = 7 % 5;

console.log(x);

// Concatenation

let a = 'Hello' + ' World';

// Returns Hello World
console.log(a);

let b = 'Hello' + ' ' + 'World';
// Also returns Hello World
console.log(b);

// Exponent
let c = 2 ** 3;
// Returns 8
console.log(c);


// Increment
let d = 1;
// Increment One way
// d = d + 1;
// You can also increment this way
d = d++;
// Returns 2
console.log(d);

// Decrement
let e = 1;
// Decrement One Way
// e = e - 1;
// You can also decrement this way
e = e--;
// Returns 1
console.log(e);

// Assignment Operators
// Literally just assigning f a value of 10
f = 10;

// Returns 10
console.log(f);

f += 5;

// This is same as saying
// f = f + 5;

// Returns 15
console.log(f);

f -= 5;
// Returns 10

// This is same as writing
// f = f - 5;
console.log(f);

f *= 5; // 50
f /= 5; // 10
f %= 5; // 0

console.log(f);

// Comparison Operators

// == compares value
let g = 2 == 2;
// Returns true
console.log(g);

g = 2 == 4;
// Returns false
console.log(g)

// === compares value AND Data Type
g = 2 == 2; // True
g = 2 === '2' // False (Same value different data type one is number and one is a string)


// !=  NOT equal comparison
g = 2 != 2; // False 
g = 2 != '2' // False
g = 2 !== '2' // True

// > Greater than
g = 5 > 3 // true
// < Less than
g = 9 < 5 // False
// >= Greater than OR equal to
g = 5 >= 4 // True
// <= Less than OR equal to
g = 9 <= 9 // True