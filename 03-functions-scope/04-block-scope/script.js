// Global scope variable
const x = 100;

if (true) {
  // Global scope variables can be used anywhere
  console.log(x);
  // block variable can be used within this block
  const y = 200;
  console.log(x + y);
}

// error y is not defined
// console.log(y)

// Another example 
for (let i = 0; i <= 10; i++) {
  // log each number until it gets to 10
  // console.log(i);
}

// error i is not defined because it is scoped within that loop block above
// console.log(i)

// Differences between var vs let and const
if(true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

// Error a is not defined
// console.log(a);
// Error b is not defined
// console.log(b);
// Error b is not defined
// 700 this does work
// var is NOT block scoped it can be access outside a block, this isn't good practice as most programming languages are block scoped
// So let and const were created to solve the scope issue with es2015, var is still around though because removing it would have broken
// many projects it's not recommended to use var
console.log(c);

// This also applies to loops
// for (var i = 0; i <= 10; i++) {
//   // log each number until it gets to 10
//   console.log(i);
// }

// logs 11 because var is accessible outside the loop block scope
// console.log(i);

// Var IS function scoped though
function run() {
  var d = 100;
  console.log(d);
}

// logs 100
run();

// Error d is not defined, var can't be accessed outside the function scope
// console.log(d);

const foo = 1;

// One more thing about var:
// When creating a var variable in the global scope, it also gets added to the window object
// If you type window in your console you'll see bar has been added, but const and let variables are NOT added
var bar = 2;