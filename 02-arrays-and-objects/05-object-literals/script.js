const person = {
  name: 'Asuka',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main St',
    city: 'San Marcos',
    state: 'TX'
  },
  hobbies: ['music', 'karate', 'art']
}

x = person
// Returns Person Object
console.log(x);
// Get properties from the object with dot notation
x1 = person.name
// Returns Asuka
console.log(x1);

// You can also use bracket notation
x2 = person['age'];
// Returns 30
console.log(x2);

// Dot notation is much more common

// Access properties from an object WITHIN an object
x3 = person.address.state;
// Returns TX
console.log(x3);

// Objects can have any type of data in them I will access the array of hobbies now
x4 = person.hobbies;
// Returns ['music', 'karate', 'art']
console.log(x4);

// Get first element in the hobbies array
x5 = person.hobbies[0];
// Returns Music
console.log(x5);

// You can also update properties
person.name = 'Satomi';

x6 = person.name;
// Returns Satomi
console.log(x6);

// You can update properties with bracket notation too
person['isAdmin'] = false;

x7 = person.isAdmin;
// Returns False
console.log(x7);

// Remove a Property from an object with delete
delete person.age;

x8 = person;
// Returns updated person object with the age property now deleted
console.log(x8)

// You can also add new properties
person.hasChildren = true;

x9 = person;
// Returns updated person object with the newly added hasChildren peroperty
console.log(x9)

// Functions in objects
person.greet = function() {
  console.log(`Hello World my name is ${this.name}`);
}

// Call the function
// Returns Hello World my name is Satomi
person.greet();