/*
  Sealing - Prevents properties from being added or removed. Can still be changed.
  Freezing - Prevents properties from being added, removed or changed.
*/

const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  height: 10
}

let descriptors;

// Get all the flag values
// descriptors = Object.getOwnPropertyDescriptors(rectObj);
// console.log(descriptors); // By default they are all true

// === SEALING === 
// Now lets seal them
Object.seal(rectObj);
descriptors = Object.getOwnPropertyDescriptors(rectObj);
// console.log(descriptors); // Configurable is now set to false on all properties

// Add a new property
// rectObj.color = 'red';
// console.log(rectObj); // color was not added
// Delete a property
// delete rectObj.name; // Name is still there
// rectObj.width = 20;
// console.log(rectObj); // Width is now 20

// Remember sealing allows you change properties but you cannot add or remove them

// === FREEZING === 
const circleObj = {
  name: 'Circle 1',
  radius: 30
}

// Freeze the circle properties
Object.freeze(circleObj);
descriptors = Object.getOwnPropertyDescriptors(circleObj);
console.log(descriptors); // Everything but enumerable is set to false

// circleObj.color = 'blue';
// console.log(circleObj); // color was not added
// delete circleObj.name;
// console.log(circleObj); // name was not removed
// circleObj.name = 'New Name';
// console.log(circleObj); // Name is still Circle 1

// isSealed() and isFrozen()
console.log('rectObj is sealed?', Object.isSealed(rectObj)); // rectObj is sealed? true
console.log('rectObj is frozen?', Object.isFrozen(rectObj)); // rectObj is frozen? false
console.log('circleObj is sealed?', Object.isSealed(circleObj)); // rectObj is sealed? true
console.log('circleObj is frozen?', Object.isFrozen(circleObj)); // rectObj is frozen? true

// Freezing an object also seals it