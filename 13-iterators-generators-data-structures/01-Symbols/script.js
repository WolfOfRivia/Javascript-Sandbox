// Symbols
const sym = Symbol() // Undefined Identifier;
const sym1 = Symbol('foo') // Identifier is foo;
const sym2 = Symbol('bar') // Identifier is bar;

// Identifiers are not values, essentially the only importance they show is identifying the symbol

console.log(sym, sym1, sym2) // Logs Symbols
console.log(typeof sym); // Symbol

// Get Description of Symbol
console.log(sym1.description) // foo
console.log(sym.description) // undefined

// All symbols are unique here's the proof
console.log(Symbol('sym') === Symbol('sym')) // false

// This can be useful with an object
// Say you want the object to have an unique ID

const user = {
  [Symbol('id')]: 1,
  name: 'John Doe',
  email: 'john@email.com',
}

/* Refer back to the video for explaination too much to type down  around the 4:35 mark */

console.log(user);

// Symbols are NOT enumerable
console.log(Object.keys(user)); // Only shows name and email

console.log(Object.values(user)); // Only shows the values for the keys of name and email in user

// Trying a for in loop
for (let key in user) {
  console.log(key); // name, email
}

// None of the above will ever show the Symbol

// Get an array of all the Symbols in an object with getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(id)]

// Another way to create Symbols with Symbol.for()
const sym3 = Symbol.for('foo');
const sym4 = Symbol.for('foo');

console.log(sym3 === sym4); // true
console.log(Symbol.keyFor(sym3)); // foo
console.log(Symbol.keyFor(sym)); // Undefined sym wasn't created using Symbol.for();

console.log(sym1.toString()); // Returns Symbol(foo) as a string
console.log(sym3.toString()); // Returns Symbol(foo) as a string
console.log(sym.toString()); // Returns Symbol() as a string

console.log(sym1.valueOf()); // Returns Symbol(foo) Actual Value
console.log(sym3.valueOf()); // Returns Symbol(foo) Actual Value
console.log(sym.valueOf()); // Returns Symbol() Actual Value

// See a list of built in Symbols
console.log(Object.getOwnPropertyNames(Symbol)); // An array of all different types of Symbols