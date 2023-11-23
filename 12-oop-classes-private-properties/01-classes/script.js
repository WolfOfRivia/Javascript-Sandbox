// function Rectangle(name, height, width) {
//   this.name = name,
//   this.height = height,
//   this.width = width
// }

// // Creating the area method for the Rectangle Object 
// Rectangle.prototype.area = function() {
//   return this.height * this.width;
// }

// // Add more methods
// Rectangle.prototype.perimeter = function() {
//   return 2 * (this.height + this.width);
// }

// Rectangle.prototype.isSquare = function() {
//   return this.height === this.width;
// }

// const square = new Rectangle('Square', 20, 20);
// console.log(square);

// We are going to recreate the above, but instead use classes, it does the same thing just differen syntax
class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }
  // Adding methods within the class
  area() {
    return this.height * this.width;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  isSquare() {
    return this.width === this.height;
  }

  // The this keyword can also be used to access other methods
  logArea() {
    console.log('Rectangle Area: ' + this.area());
  }
}

const square = new Rectangle('Square', 20, 20);
console.log(square);
console.log(square.area()); // 400
console.log(square.perimeter()); // 80
console.log(square.isSquare()); // true
square.logArea(); // Rectangle Area: 400
// console.log(Object.getPrototypeOf(square));