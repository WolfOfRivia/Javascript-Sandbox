// Alternate way to add prototypes to objects

// This is just an object of prototypes as of now they do nothing
const rectanglePrototypes = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
  isSquare: function() {
    return this.width === this.height;
  }
}

// Now we will use the object create method
// This is an alternate way to create rectangles other than using the constructor function
function createRectangle(height, width) {
  // with the object create method, the first arg is the prototypes for the object, the second arg is the object you're creating
  return Object.create(rectanglePrototypes, {
    height:  {
      value: height
    },
    width: {
      value: width
    },
  });
}

const rect = createRectangle(10, 20);

console.log(rect); 
/*
  Once logged you'll see an object with a width and height, but when looking at the prototypes
  you WON'T see a constructor because this object wasn't created using a constructor function.
  no need to do rect.prototype.method, because we used the rectangle prototypes object above to do that.
*/
console.log(rect.area()); // 200
console.log(rect.isSquare()); // false

// From here you can create as many rectangles as you want.
const rect2 = createRectangle(20, 20);

console.log(rect2.perimeter()); // 80

// In the end this is just another way to create multiple objects and add prototypes to them