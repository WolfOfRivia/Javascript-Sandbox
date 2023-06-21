const arr = [34, 55, 95, 20, 15];
console.log(arr);

// Add element to end of array
arr.push(100);
console.log(arr);

// Remove element from end of array
arr.pop()
console.log(arr);

// Add element to beginning of array
arr.unshift(99);
console.log(arr);

// Remove element from beginning of array
arr.shift();
console.log(arr);

// Reverse an array
arr.reverse();
console.log(arr);

// Check if specific value is in an array
x = arr.includes(20);
// Returns true
console.log(x)

x1 = arr.includes(200);
// Returns false
console.log(x1);

// Get index of a specific value
x2 = arr.indexOf(15)
// Returns 0 
// Reminder even though in the initialization of the array 15 is at the end, on line 21 we reversed the array so now it's 0
console.log(x2)

// Reverse the array back
arr.reverse();
// Returns the original order of the array
console.log(arr);

x3 = arr.indexOf(101);
// Returns -1 which means the 101 is not in the array
console.log(x3)

// Slice Method
x4 = arr.slice(1)
// Returns every element in the array starting at the 1 index
// [55, 95, 20, 15]
console.log(x4);

x5 = arr.slice(1, 4);
// Returns every element in the array starting at the 1 index and STOPPING at the 4 index, it doesn't however include the element at the 4 index
// [55, 95, 20]
console.log(x5);

// Splice Method
// Unlike the slice method, which gets items out of an array but DOESN'T change the original array, slice DOES change the original array
// The first arg is where we start in the array (index 1) and the second arg is where we stop in the array or how many indexes over we go (at index 4)
x6 = arr.splice(1, 4);
// Returns [55, 95, 20, 15]
console.log(x6);
// the array of arr [34, 55, 95, 20, 15] has now been changed to [34] 
// The removed elements have been stored in a new array in x6
console.log(arr);

// Lets say we only wanted to remove 1 item from the array with splice

// Bringing back the original array
const arr2 = [34, 55, 95, 20, 15];
// Returns [34, 55, 95, 20, 15]
console.log(arr2);

// Lets remove 20
// the arg of 3 is the index of where 20 is in the array, the arg 1 is how many indexes over we go it's 1 in this case becasue we only want to remove 1 element
arr2.splice(3, 1);
// [34, 55, 95, 15]
console.log(arr2);

// Bringing back the original array
const arr3 = [34, 55, 95, 20, 15];
// Returns [34, 55, 95, 20, 15]
console.log(arr3);