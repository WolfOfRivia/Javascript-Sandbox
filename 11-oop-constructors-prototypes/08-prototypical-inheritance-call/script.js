// The objective is to have other shapes inherit this shape constructor to the prototype chain or (inheritance)
function Shape(name) {
  this.name = name;
}

Shape.prototype.logName = function() {
  console.log(`Shape Name: ${this.name}`);
}

// If we put prototypes on Shape, then rectangles, circles, squares, whatever we create will be inheriting these prototypes (methods)
// Using classes makes this process a lot easier but it's still important to learn and know this syntax (Brad personally does not like this syntax and prefers classes)

function Rectangle(name, height, width) {
  // You have to do it this way because inside the Shape function the `this` refers to the window object, .call() makes it to where `this` now refers to THIS new object
  // Apparently you should watch the semi-colon too you'll get errors
  Shape.call(this, name);
  this.height = height;
  this.width = width;
}

// Rectangle needs to now inherit Shape's prototypes
Rectangle.prototype = Object.create(Shape.prototype);

// Override the Shape's LogName method, JUST for Rectangle (An example of Polymorphism)
Rectangle.prototype.logName = function() {
  console.log(`Rectangle Name: ${this.name}`);
}

function Circle(name, radius) {
  Shape.call(this, name);
  this.radius = radius;
}

// Circle needs to now inherit Shape's prototypes
Circle.prototype = Object.create(Shape.prototype);

// Once these objects inherit the Shape prototype, when looking in the console, their constructor will now be set to the Shape constructor
// We want to set them back to their original, you do it this way.

// Set Prototype Constructors
Rectangle.prototype.constructor = Rectangle;
Circle.prototype.constructor = Circle;

// Now Rectangle's constructor is Rectangle, and Circle's constructor is Circle

const rect = new Rectangle('Rectangle 1', 20, 20);
const cir = new Circle('Circle 1', 30);

console.log(rect, cir);

rect.logName();
cir.logName();