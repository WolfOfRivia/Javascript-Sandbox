// Parent Class
class Shape {
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log('Shape Name: ' + this.name);
  }
}

// To inherit a class you use the extends keyword
// This is also known as a sub class
class Rectangle extends Shape {
  constructor(name, width, height) {
    // The name exist in the class we are extending so we use a method called super() to call the constructor of the parent class
    super(name);
    /* With Super what happened is it called the code below from the shape constructor
      you make sure it takes in the same arguments
      constructor(name) {
        this.name = name;
      }
    */
    this.height = height;
    this.width = width;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  // Overwrite logName for circle (Polymorphism)
  logName() {
    console.log('Circle Name: ' + this.name);
  }
}

const rect = new Rectangle('Rect 1', 20, 20);
const cir = new Circle('Cir 1', 30);

console.log(rect);
rect.logName(); // Shape Name: Rect 1
cir.logName(); // Circle Name: Cir 1

console.log(rect instanceof Rectangle); // True
console.log(rect instanceof Shape); // True, because we extend shape it is also an instance of shape