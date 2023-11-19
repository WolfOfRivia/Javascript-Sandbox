// function Rectangle(name, height, width) {
//   this.name = name,
//   this.height = height,
//   this.width = width,
//   this.area = function() {
//     return this.height * this.width;
//   }
// }

// const rect1 = new Rectangle('Rectangle 1', 10, 10);
// console.log(rect1);

/*
  Upon loading this script the rectangle prototype currently only has the constructor
  We can add more prototypes to it like the area method.
  Currently when creating a rectangle they all need a name, height and width which will 
  always be different per rectangle. BUT area never changes so it's more efficient to just
  add that method as a prototype. From there any new rectangle created has access to the 
  area prototype. Commenting out all the code above to create it new.
*/

function Rectangle(name, height, width) {
  this.name = name,
  this.height = height,
  this.width = width
}

// Creating the area method for the Rectangle Object 
Rectangle.prototype.area = function() {
  return this.height * this.width;
}

// Add more methods
Rectangle.prototype.perimeter = function() {
  return 2 * (this.height + this.width);
}

Rectangle.prototype.isSquare = function() {
  return this.height === this.width;
}

// A method that takes in an argument
Rectangle.prototype.changeName = function(newName) {
  return this.name = newName;
}

const rect1 = new Rectangle('Rectangle 1', 10, 10);
console.log(rect1); // Now when you log the object and open the prototype, you no longer only see the constructor there, any new prototypes created were also added
console.log(rect1.area()); // 100
console.log(rect1.perimeter()); // 40
console.log(rect1.isSquare());
rect1.changeName('Rectangle 3');
console.log(rect1.name); // The name is now Rectangle 3

const rect2 = new Rectangle('Rectangle 2', 30, 40);
console.log(rect2.area()); // 1200