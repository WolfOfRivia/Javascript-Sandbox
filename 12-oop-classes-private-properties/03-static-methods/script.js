class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }

  // the keyword static before a method to make it a static method
  // It doesn't need an instance to be called as it refers to the actual class itself
  static getClass() {
    return 'Rectangle';
  }
}

const rect = new Rectangle('Rect', 10, 10);
console.log(rect.area());
// console.log(rect.getClass()); // Error rect.getClass is not a function
console.log(Rectangle.getClass()); // Rectangle

// Re-watch the video and look this up more, this is an important concept to understand