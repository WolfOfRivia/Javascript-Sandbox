const email = 'test@test.com';

if(email) {
  console.log('You passed in an email');
}

console.log(Boolean(email));

// The reason this happened is because a string with anything in is is a truthy value
// It will always result to true

// Falsy Values: There are six of them
// - false
// - 0
// - "" or '' (empty string)
// - null
// - undefined
// - NaN

const x = false;
// Any of the six values above will give you the same result

if(x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy'); // This will run
}

console.log(Boolean(x));

// Truthy Values: 
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (Space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const t = ' ';

if(t) {
  console.log('This is truthy'); // This will run
} else {
  console.log('This is falsy');
}

console.log(Boolean(t));

// Truthy and Falsy areas of confusion (EVERYTHING BELOW APPLIES)

// const children = 2;

// // You might commonly see something like this in web forms where a field is required
// if(children) {
//   console.log(`You have ${children} children`); // This will run
// } else {
//   console.log(`Please enter number of children`);
// }

// const children = 0;

// if(children) {
//   console.log(`You have ${children} children`);
// } else {
//   console.log(`Please enter number of children`); // This will run
// }
// The else block will run is children was defined as 0 because it's false

// A way around this
const children = 0;

if(children !== undefined) {
  console.log(`You have ${children} children`); // This will run
} else {
  console.log(`Please enter number of children`);
}

// You could have also did
// if(!isNaN(children))

// Checking for empty Arrays
const posts = ['post one', 'post two'];

if(posts) {
  console.log('List Posts'); // This will run
} else {
  console.log('No Posts');
}

// const posts = [];

// if(posts) {
//   console.log('List Posts'); // This will run because empty arrays are truthy values
// } else {
//   console.log('No Posts');
// }

// const posts = [];

// if(posts.length > 0) {
//   console.log('List Posts'); 
// } else {
//   console.log('No Posts'); // This will run
// }

// Checking for empty onjects
// const user = {
//   name: 'James'
// };

// if(user) {
//   console.log('List User'); // This will run
// } else {
//   console.log('No User')
// }

// const user = {};

// if(user) {
//   console.log('List User'); // This will run
// } else {
//   console.log('No User')
// }

// const user = {};

// if(Object.keys(user).length > 0) {
//   console.log('List User');
// } else {
//   console.log('No User') // This will run
// }

// Loose Equality (==)
console.log(false == 0); // true
console.log('' == 0); // true
console.log(null == undefined); // true

// Strict Equality (===) // Also checks the type of value
console.log(false ===  0); // false
console.log('' === 0); // false
console.log(null === undefined); // false