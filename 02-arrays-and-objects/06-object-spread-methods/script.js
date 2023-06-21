// Another way to create objects
const todo = {};

// Now add properties
todo.id = 1,
todo.name = 'Buy Milk',
todo.completed = false

// Returns todo object
console.log(todo);

// Also works this way
const todo2 = new Object();

todo2.id = 1,
todo2.name = 'Check Mail',
todo2.completed = true

console.log(todo2);

// Rehash about nesting

const person = {
  address: {
    coords: {
      lat: 55.123543,
      lng: -32.123954 // This is the middle of the friggin north atlantic btw
    }
  }
}

// Return Longitude
console.log(person.address.coords.lng);

// Using spread operator with objects
const obj1 = {a: 1, b: 2, c: 3};
const obj2 = {e: 4, d: 5, f: 6};

// I could nest these two objects in a new object
const obj3 = {obj1, obj2};
// Returns object with obj1 and obj2 nested within
console.log(obj3);

// Use the spread operator to combine obj1 and obj2 into a new obj
const obj4 = {...obj1, ...obj2};

// Returns one single object combining all the properties of obj1 and obj2
console.log(obj4);

// There are methods to accomplish the same task, before the spread operator was introduced there was a method called assign()

// Arg one is creating an empty object, args 2 and 3 are taking properties from those objects and assigning them to the new object
const obj5 = Object.assign({}, obj1, obj2);
// Returns one single object combining all the properties of obj1 and obj2
console.log(obj5);

// I'll use the spread operator because it's new and easier but it's nice knowing of these older methods

// Dealing with array of objects
const todos = [
  {id: 1, name: 'Buy Milk'},
  {id: 2, name: 'Check Mail'},
  {id: 3, name: 'Take out Trash'}
];

// Return array of objects
console.log(todos);
// Return first object in array
console.log(todos[0]);
// Return name of first object in array
console.log(todos[0].name);

// Get all keys of an object and put them in an array
x = Object.keys(todo);

// Returns ['id', 'name', 'completed'];
console.log(x);

// Get the length of an object (how many properties it has)
// You can't use the length method
// Returns undefined
// console.log(todo.length);

// Get the keys and store them in an array and then check the length
x2 = Object.keys(todo).length;
// Returns 3
console.log(x2);

// Get all values of an object and put them in an array
x3 = Object.values(todo);
// Returns ['1', 'Buy Milk', false];
console.log(x3);

// Get all the keys and value parings of an object and store them in an array
x4 = Object.entries(todo);
// Returns an array of arrays Check what's in it, I'm not typing it
console.log(x4);

// Check if object has a specific property
// Check if todo object contains a property called name
x5 = todo.hasOwnProperty('name');
// Returns true
console.log(x5);