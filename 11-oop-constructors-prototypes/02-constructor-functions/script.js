function Rectangle(name, width, height) {
  this.name = name,
  this.width = width,
  this.height = height,
  this.area = function() {
    return this.height * this.width;
  }
}

const rect1 = new Rectangle('Rectangle 1', 10, 10);

// When using the new keyword these things happen
// 1. A new empty object is created.
// 2. The constructor function is called with the arguments that we passed in.
// 3. The `this` keyword is set to the new empty object
// 4. The new object is returned from the constructor function.

console.log(rect1); // Log the new object we created

console.log(rect1.area()) // Log the area of the new object

// Since we have the rectangle blueprint, we can now create as many as we want
const rect2 = new Rectangle('Rectangle 2', 20, 15);
const rect3 = new Rectangle('Rectangle 3', 200, 150);
const rect4 = new Rectangle('Rectangle 4', 320, 205);

console.log(rect4.area(), rect3.name);

// Get the constructor function of an object
console.log(rect1.constructor);
// Instance of operator
console.log(rect2 instanceof Rectangle); // Logs true because rect2 IS an instance created from the rectangle constructor