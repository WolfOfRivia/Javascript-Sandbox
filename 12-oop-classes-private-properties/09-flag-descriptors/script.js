/*
  1.[[Configurable]] - if `true`, the property can be deleted and these 
    attributes can be modified, otherwise not
  2.[[Enumerable]] - if `true`, the property will be returned in a
    `for...in` loop, otherwise not
  3.[[Writable]] - if `true`, the value of the property can be changed, 
    otherwise not
  4.[[Value]] - the value of the property

  // Note when creating a new object all of these are set to true by default as seen on line 36
*/

// The way we can view the flags is with a descriptor, we can use the method called getOwnPropertyDescriptor()

// Examples where some of these are set to false, the Math.PI property is one example
// console.log(Math.PI); // 3.141592653589793
// .PI property cannot be changed.
Math.PI = 4;
// console.log(Math.PI); // you still get 3.141592653589793 this is because of the flags

// Check the flags
let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor); // {value: 3.141592653589793, writable: false, enumerable: false, configurable: false}
// Configurable: False meaning it cannot be changed or modified
// Enmerable: False meaning this property won't show up in a for...in loop
// Writable: False meaning you can only read this property

// Create our own object
const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  height: 10,
}

// descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name');
// console.log(descriptor); // {value: 'Rectangle 1', writable: true, enumerable: true, configurable: true}

// Set the name property to false
Object.defineProperty(rectObj, 'name', {
  writable: false,
  enumerable: false,
  configurable: false
});

// Note if setting configuable to false, once don't you cannot change it back, so I can't do Object.defineProperty again on the name property
// console.log(descriptor); // {value: 'Rectangle 1', writable: false, enumerable: false, configurable: false}

// Try to change the name
rectObj.name = 'New Name';
// console.log(rectObj); // Name will still be Rectangle 1, because we made it unchangable when setting configuarble to false
delete rectObj.name;
// console.log(rectObj); // Name will still be there
// delete rectObj.width;
// console.log(rectObj); // Width is now gone (because all those flags are set to true)

// Seeing what enumerable false does 
// You can use for...of or for...in loops
for (let [key, value] of Object.entries(rectObj)) {
  console.log(`Key: ${key}: Value: ${value}`); // Will only show the width and the height, the name enumerable flag is set to false, so It won't show in loops
}

// Get descriptors for all properties
console.log(Object.getOwnPropertyDescriptors(rectObj)); // We get the flags of all the properties in an object