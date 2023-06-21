// Scoping with nested functions and blocks
// Nested functions relate to closures which will be learned about later
function first() {
  const x = 100;

  // This is a nested function
  function second() {
    const y = 200;
    console.log(x + y);
  }

  // How this works is child or (nested) functions can access variables within the parent scope
  // It doesn't work the other way around though
  // Error y is not defined, first() cannot scope into second() to access the y variable
  // console.log(y)

  // in order to run the function called second, it must be called within the function call first
  second();
}

// Run first
// Logs 300
first();

// It's similar with blocks
if (true) {
  // const x will work because this is a different scope the one on line 4 was defined in the first() scope
  // It wouldn't work if defined const x as global scope though
  const x = 100;

  // child or (nested) if statement
  if( x === 100) {
    const y = 200;
    // Logs 300 works because x was defined in the parent scope
    console.log(x + y);
  }

  // error because y is defined in the child scope
  // console.log(y);
}