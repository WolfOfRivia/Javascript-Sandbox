// Cleaner way to loop through an array than a standard for loop or while loop
const items = ['book', 'table', 'chair', 'kite'];

// for loop
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// the for of loop
for (const item of items) {
  console.log(item); // same result as the for loop
}

// loop through an array of objects
const people = [
  {name: 'Ashley'},
  {name: 'Liara'},
  {name: 'Tali'},
  {name: 'Miranda'},
  {name: 'Jack'},
  {name: 'Diana'},
  {name: 'Kelly'}
];

for (const user of people) {
  console.log(user.name);
}

// Brad mentioned foreach loops as well but this is just a cleaner alternative to the while or for loop

// Looping through strings
const str = 'Hello World';

for(const letter of str) {
  console.log(letter);
}

// Loop over maps (Maps haven't been mentioned at this point)
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
  console.log(key, value);
}
