// Sets can store a collection of unique values, they are unordered and don't allow duplicates
// Pretty much you can use if you want to check for a collection of values and you don't care about the order

const set = new Set([1,2,3,4]);

console.log(set); // {1,2,3,4};

// Values must be unique so if you had your set contain this [1, 2, 2, 3, 4, 4, 4] it will still read as {1, 2, 3, 4}

// Add to a set with .add() method
set.add(5);

console.log(set); // {1, 2, 3, 4, 5}

// Check for value (membership) in a set with .has() method
console.log(set.has(6)); // false
console.log(set.has(3)); // true

// Remove from a set with .delete() method
set.delete(5);
console.log(set); // {1, 2, 3, 4} 5 has been removed

// Convert a set to an array with the Array.from() method
const setArray = Array.from(set);

console.log(setArray); // [1, 2, 3, 4]; // NOTE: Even if your set had duplicate like demostrated on line 8, converting to an array will still omit the duplicates like the set does.

// Iterate over a set (You can do this in many ways)

// Using for of loop
for (let item of set) {
  console.log(item); // Logs 1 through 4
}

// Create an iterator from a set using the .values() method from a set
const iterator = set.values();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: 4, done: false}
console.log(iterator.next()); // {value: undefined, done: true}

// Clear a set with .clear() method
set.clear();
console.log(set) // {size: 0};