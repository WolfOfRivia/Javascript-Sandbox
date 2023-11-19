const rectangle = {
  name: 'Rectangle 1',
  width: 10,
  height: 10,
  area: function() {
    return this.width * this.height;
  }
}

// Downside to object literals is that you'll have to rewrite the code to create another rectangle
const rectangle2 = {
  name: 'Rectangle 2',
  width: 15,
  height: 10,
  area: function() {
    return this.width * this.height;
  }
}

// Would if you had 100 rectangles? This where you would use a constructor function

console.log(rectangle.area());
console.log(rectangle2.area());