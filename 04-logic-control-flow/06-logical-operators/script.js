// && AND
console.log(10 > 20 && 30 > 15) // false
// logs false because ALL conditions have to be true in this case only one condition is true
// No matter how many more conditions you add if even one is false, it will always be false

// || OR
console.log(10 > 20 || 30 > 15) // True
// if at least one condition is true, then console will log true

// && - Will return first falsy value or the last value
let a;

a = 10 && 20; // None of these are falsy values so it gives back 20
console.log(a) // 20

let b;

b = 10 && 20 && 30; // None of these are falsy values so it gives back 30
console.log(b) // 30

let c;
c = 10 && 0 && 30; // 0 is a falsy value so it will return 0
console.log(c); // 0

let d;
d = 10 && '' && 0 && 30; // empty strings are a falsy value AND it's also the first one so it will return an empty string
console.log(d); // returns empty string

// When would we use something like this?
// Example: 

const posts = ['post one', 'post two']; // pretend these came from a database

// Lets show the first post
console.log(posts[0]); // Shows the first post

// But would if the array was empty?
const posts2 = [];

// Lets show the first post
console.log(posts2[0]); // undefined

// You don't want undefined showing on your web page

// You can prevent that this way
console.log(posts2.length && posts2[0]); // returns 0 or false so now it won't show anything

// This is common when in framworks like react when pulling data from a database or an api and not
// showing data that isn't there

// || - Will return first truthy value or the last value
let e = 10 || 20;
console.log(e); // 10

let f = 0 || 20;
console.log(f); // 20

let g = 0 || null || '' || undefined;
console.log(g) // undefined

// Nullish Coalescing operator (Not used a lot)
// ?? - Returns the right side operand when the left is null or undefined

let a2;
a2 = 10 ?? 20; // 10 is not null or undefined so we get 10
console.log(a2); // 10

let b2 = null ?? 20; // The left side is now null so will log 20
console.log(b2) // 20

let c2 = undefined ?? 30; // The left side is now null so will log 20
console.log(c2) // 30

// It's not looking for Falsy, it's looking for ONLY if Null or Undefined
let d2 = 0 ?? 30 // will return 0 because 0 isn't null or undefined
console.log(d2) // 0