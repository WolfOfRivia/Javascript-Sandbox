class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Create a getter
  get firstName() {
    // The underscore in the properties is common convention used to signal that these properties are supposed to be private
    // and not to be accessed by the user.
    return this.capitalizeFirst(this._firstName);
  }

  // There's a couple reasons why you would use a getter, 1 you want to keep the property private, or two you might want to do something to that data
  // before returning it, as we did with _firstName by capitalizing the first character first

  // Create a setter
  set firstName(value) {
    // Sets the first name property to a new value
    this._firstName = this.capitalizeFirst(value);
  }

  get lastName() {
    return this.capitalizeFirst(this._lastName);
  }

  set lastName(value) {
    this._lastName = this.capitalizeFirst(value);
  }

  // Create a fullname 
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Capitalize the first letter in firstName
  capitalizeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const person1 = new Person('john', 'doe');

console.log(person1.firstName);

// Here we are accessing the setter NOT the property
person1.firstName = 'joe';
person1.lastName = 'paul';
console.log(person1);
console.log(person1.fullName);