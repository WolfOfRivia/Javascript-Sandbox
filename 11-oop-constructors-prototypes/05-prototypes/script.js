function Rectangle(name, height, width) {
  this.name = name,
  this.height = height,
  this.width = width,
  this.area = function() {
    return this.height * this.width;
  }
}

const rect1 = new Rectangle('Rectangle 1', 10, 10);
console.log(rect1);

// See the prototype of an object
console.log(Object.getPrototypeOf(rect1)); // Shows just the constructor for now

// But the area method can be added as prototype instead of being on the constrctor itself
// We look at doing that in the next lesson