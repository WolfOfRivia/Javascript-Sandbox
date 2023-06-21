// ||= assigns the right side value if the left is a falsy value.
// Brad says this one is the most useful

// The long version this
let a = false;

// Checking to see if a variable is falsy
if(!a) {
  a = 10; // If it is then we are setting it to 10
}

// The shorthand way uses this
a = a || 10; // This means the same as lines 8 through 10

// Then we get to the assignment method defined on line 1
a ||= 10; // Means the same thing as line 13 and lines 8 through 10

// Rewatch the video often till you really get this.


// &&= assigns the right side value only if the left is a truthy value.
let b = 10;

// Checking if variable is a truthy value
if(b) {
  b = 20; // This is true so it will assign b as 20
}

// Shorthand
b = b && 20;

// Even shorter method defined on line 21
b &&= 20;

console.log(b);

// ??= assigns the right side value only if the left is null or undefined.
// Essentially this one ONLY checks for null or undefined

let c = null;
if(c === null || c === undefined) {
  c = 20;
}

// Shorthand
c = c ?? 20;

// Even shorter methond defined on line 37
c ??= 20;

console.log(c);