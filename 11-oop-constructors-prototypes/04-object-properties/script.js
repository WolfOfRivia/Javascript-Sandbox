function Rectangle(name, height, width) {
  this.name = name,
  this.height = height,
  this.width = width,
  this.area = function() {
    return this.height * this.width;
  }
}

const rect1 = new Rectangle('Rectangle 1', 10, 20);
const rect2 = new Rectangle('Rectangle 2', 30, 40);

// To access properties use dot notation
console.log(rect1.name, rect2.width); // Rectangle 1, 40
// You can also use bracket notation
console.log(rect1['height'], rect2['name']); // 10, Rectangle 2
// You can also add new properties
rect1.color = 'red';
console.log(rect1); // Logs the object but also shows the new color property added

// You can also add functions (methods)

/*
One might think you would do it this way however this is incorrect, the `this` keyword
in this case actually refers to the window object because we are not inside the rectangle constructor.
So for adding a function (method) you must actually refer to the object you are working with (In this case rect2)

rect2.perimeter = () => 2 * (this.width + this.height); // Does not work
*/

// Add the functions (method) on an object this way
rect2.perimeter = () => 2 * (rect2.width + rect2.height);
console.log(rect2.perimeter()); // 200

// In most cases you probably won't do that, ideally the function would just be in the constructor, but if needed for
// a specific object you CAN add a function(method)

console.log(rect2); // Logs the rect2 object, you'll see that in addition to the area function, it also has the perimeter function

// Remove a property with delete
delete rect2.perimeter;

console.log(rect2); // Logs the rect2 object, you'll see now that the perimeter function has been removed

// Check for a property with hasOwnProperty()
console.log(rect2.hasOwnProperty('color')); // returns false
console.log(rect1.hasOwnProperty('color')); // returns true because we added the color property on line 18

// More functions available on objects

// Get keys (We went over this before probably in lesson 2)
console.log(Object.keys(rect1)); // Returns an array of keys ['name', 'height', 'width', 'area', 'color']

// Get Values (We also went over this before in lesson 2)
console.log(Object.values(rect1)); // Returns an array of values ['Rectangle 1', '10', '20', 'f', 'red'] The f means functions btw because area is a function (method)

// Get entries
console.log(Object.entries(rect1)); // Give an array of arrays, and each array contains the key and the value of this object

// Loop through the entries with a for of loop
for (let [key, value] of Object.entries(rect1)) {
  console.log(`Key: ${key}, Value: ${value}`);
} // Loops through and logs the keys and values of this object (when it gets to the function, it actually shows the function)

// If you wanted to just get the properties and not the functions(method)
for (let [key, value] of Object.entries(rect1)) {
  if(typeof value !== 'function') {
    console.log(`Key: ${key}, Value: ${value}`); // Will only log if the value is NOT a function
  }
}