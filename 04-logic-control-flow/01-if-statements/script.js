if (true) {
  console.log('This is true');
}

// This condition is false so this block of code will not run
if (false) {
  console.log('This is NOT true');
}

// With operators
const x = 10;
const y = 5;

if (x > y) {
  console.log(`${x} is greater than ${y}`);
}

// This will not run obviously 10 is not equal to 5 so this condition is false
if (x === y) {
  console.log(`${x} is equal to ${y}`);
}

// Run a different block of code if a condition is false with else
if (x === y) {
  console.log(`${x} is equal to ${y}`); // This will not run
} else {
  console.log(`${x} is not equal to ${y}`); // This will run
}

// Remember blocks like if statements have their own scope
if (x !== y) {
  const z = 20;
  console.log(`${z} is 20`);
}

// Error z is not defined, but also remember if you use var inside the if statement scope you can access z
// console.log(z);

// Shorthand if

// You can remove the curly braces
if (x > y) console.log(`${x} is greater than ${y}`);

// If you wanted to do an else
if (x === y) console.log(`${x} is equal to ${y}`);
else console.log(`${x} is not equal to ${y}`);

// If you had multiple lines
if (x > y) 
  console.log(`${x} is greater than ${y}`), // add a comma before the next line
    console.log('This is true');
else console.log('This is false');

// You can use this syntax but I don't really like it so I won't

