const strLit = 'Hello';

const strObj = new String('Hello');

// This is a string
console.log(strLit, typeof strLit);
// This is a string object
console.log(strObj, typeof strObj);

// Boxing
console.log(strLit.toUpperCase());
// With boxing what happened behind the scene is Javascript turned strLit into an object (object wrapper)
// So it can use the toUpperCase() method, then turned it back to primitive string data type

// Same thing happens here
console.log(strLit[0]);

// Unboxing
// Boxing: Javascript adds the object wrapper onto a literal and turns it into an object
// Unboxing: Javascript removes the object wrapper turns an object back into a literal
console.log(strObj.valueOf(), typeof strObj.valueOf()); // Logs Hello and string

console.log(strLit.constructor);
console.log(strObj.constructor);

console.log(strLit instanceof String); // false
console.log(strObj instanceof String); // true we used the string constructor to create the strObj

// Other types of constructors
const numLit = 20;
const numObj = new Number(20);

console.log(numLit, typeof numLit); // 20, 'number'
console.log(numObj, typeof numObj); // Number {20}, object

const boolLit = true;
const boolObj = new Boolean(true);

console.log(boolLit, typeof boolLit); // true, 'boolean'
console.log(boolObj, typeof boolObj); // Boolean {true}, 'object

const arrLit = [1, 2, 3, 4, 5];
const arrObj = new Array(1, 2, 3, 4, 5);

// Arrays are not a primitve value they are objects whether you use literal syntax or the constructor syntax
console.log(arrLit, typeof arrLit); // [1, 2, 3, 4, 5], 'object'
console.log(arrObj, typeof arrObj); // [1, 2, 3, 4, 5], 'object'

// Functions and object constructor
const funcLit = function(x) {
  return x * x;
}

console.log(funcLit, typeof funcLit); // It logs the function, but for typeof it logs 'function' but functions are still objects (of a certain type)

console.log(funcLit(5)); // 25

// (The weird stuff according to Brad) you can create functions using the function constructor
// It takes two arguments, the first is the actual argument of the function
// the second is the body of the function passed in as a string
// It's weird but you can create functions this way
const  funcObj = new Function('x', 'return x * x');

console.log(funcObj(3)); // 9

const obj1 = {}; 
// When using literal syntax like this to create objects, behind the scenes JS is actually doing what happens on line 69 by adding the new keyword and using the Object Constructor

const obj2 = new Object();

console.log(obj1, typeof obj1);
console.log(obj2, typeof obj2);
