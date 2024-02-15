// Maps were added in ES 2015, they are similar to objects because they have key value pairs
// But the key doesn't have to be a string it can be a number, an array, an object etc

// Create Map
const myMap = new Map();

// Add data to Map using the .set() method
myMap.set('name', 'John');
myMap.set(1, 'Blue');
myMap.set(2, 'Silver');

// The map now has three key value pairs within it
console.log(myMap); // {'name' => 'John', 1 => 'Blue', 2 => 'Silver'}

// Get a value with the .get() method
console.log(myMap.get('name')); // John
console.log(myMap.get(1)); // Blue
console.log(myMap.get(2)); // Silver

// Get size (number of items) of Map
console.log(myMap.size); // 3

// Use .has() method to check if a key exists
console.log(myMap.has(1)); // true we set this on line 9
console.log(myMap.has(3)); // false

// Delete from Map
myMap.delete(2);
console.log(myMap); // {'name' => 'John', 1 => 'Blue'}

// You can also use a for each loop
const peopleMap = new Map();
peopleMap.set('daisy', {phone: '555-555-5555', email: 'daisy@email.com'});
peopleMap.set('lotus', {phone: '123-456-7890', email: 'lotus@email.com'});
peopleMap.set('topaz', {phone: '098-765-4321', email: 'topaz@email.com'});

// console.log(peopleMap);

peopleMap.forEach((person) => console.log(person.email));

// You also get keys, values, and entries from a map

// Get Keys
console.log(peopleMap.keys()); // {'daisy', 'lotus', 'topaz'}
// Get Values
console.log(peopleMap.values()); // This is the objects from lines 33 through 35 not typing it (We lazy here..)
// Get Entries
console.log(peopleMap.entries()); // Shows the key and the object

// Since these are also iterators you can use the .next() method
const iterators = peopleMap.values();

console.log(iterators.next()); // we can an object and values, then a done value
console.log(iterators.next()); // we can an object and values, then a done value
console.log(iterators.next()); // we can an object and values, then a done value
console.log(iterators.next()); // for this one done: true

// Convert maps to an array
const peopleArray = Array.from(peopleMap);

console.log(peopleArray); // An array of objects