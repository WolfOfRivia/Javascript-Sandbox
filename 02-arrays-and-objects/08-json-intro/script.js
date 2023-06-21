// We are gonna convert objects to JSON and vice versa
const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body'
};

console.log(post);

// Convert to JSON string
const str = JSON.stringify(post);

// Turns the entire object into a string, whenever sending data to a server it would be sent this way
// This is also how you store data into your local storage on your browser
console.log(str);

// Parse JSON
// This takes a string of json data and parses it back into an object
const obj = JSON.parse(str);
console.log(obj);

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body'
  },
  {
    id: 1,
    title: 'Post Two',
    body: 'This is the body'
  }
]

// Return our array of posts
console.log(posts);

// Lets stringify them
const str2 = JSON.stringify(posts);
// Returns string of json data
console.log(str2);

// You cannot access specific properties from a json string
// Returns Undefined
console.log(str.id);

// You must parse this data first
x = JSON.parse(str);
// Returns 1
console.log(x.id);