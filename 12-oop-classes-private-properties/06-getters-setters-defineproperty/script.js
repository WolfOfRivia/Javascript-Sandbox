// Creating getters and setters with constructor functions and object literals

// With constructor functions
function Person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;

  // Create getter and setter, you have to use the defineProperty() method on the Object constructor
  // defineProperty takes in three arguments, the first is the object itself (this), the second is the property we want a getter and setter for (firstName in this case)
  // the third is an object with the getter and setter functions
  Object.defineProperty(this, 'firstName', {
    get: function() {
      return this.capitalizeFirst(this._firstName);
    },
    set: function (value) {
      this._firstName = value;
    }
  })

  // Last name getter and setter
  Object.defineProperty(this, 'lastName', {
    get: function() {
      return this.capitalizeFirst(this._lastName);
    },
    set: function (value) {
      this._lastName = value;
    }
  })

  // full name getter and setter
  Object.defineProperty(this, 'fullName', {
    get: function() {
      // We can actually use the getters here in this function and we don't have to use the capitalize function either
      // The getters are already calling capitalizeFirst
      return this.firstName + ' ' + this.lastName;
    }
  })
}

// Add capital first letter to the person prototype
Person.prototype.capitalizeFirst = function(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

const person1 = new Person('john', 'doe');

// access Person1 first name but NOT the property directly with _firstName, get the first name using the getter
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);

// With object literals
const PersonObj = {
  _firstName: 'jane',
  _lastName: 'doe',

  get firstName() {
    // If you want you can actually use the Person capitalizeFirst prototype
    return Person.prototype.capitalizeFirst(this._firstName);
  },

  set firstName(value) {
    this._firstName = value;
  },

  get lastName() {
    return Person.prototype.capitalizeFirst(this._lastName);
  },

  set lastName(value) {
    this._lastName = value;
  },

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
}

console.log(PersonObj.firstName);
console.log(PersonObj.lastName);
console.log(PersonObj.fullName);