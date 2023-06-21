// Challenge 1

// Result should be [6, 1, 2, 3, 4, 5, 0];

// My solution
const arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.reverse();
arr.push(0);

console.log(arr);

// Challenge 2

// Result should be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// My solution
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Splice Method
const arr3 = [...arr1, ...arr2];
arr3.splice(4, 1);
console.log(arr3);

// Slice Method AND chaining methods
const arr4 = arr1.slice(0, 4).concat(arr2);
console.log(arr4);

// Brad's solutions

// Challenge 1
// const arr = [1, 2, 3, 4, 5];

// arr.reverse();
// arr.push(0);
// arr.unshift(6);

// OR

// arr.push(6);
// arr.unshift(0);
// arr.reverse();

// But again mine worked too

// console.log(arr);

// Challenge 2

// Brad's solutions for challenge 2 was the same as both of the ones I used