let i = 1;

// While loop
// while(i <= 20) {
//   console.log('Number ' + i);
//   i++;
// }

// Common tactics on which loop to use
// 1. Use the for loop when you know for sure the number of times you want the loop to run.
// 2. Use the while loop when the number of times is unknown

// Loop over arrays
const arr = [10, 20, 30, 40, 50];

// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// Nesting while loops
// while(i <= 5) {
//   console.log('number ' + i);
//   let j = 1;
//   while(j <= 5) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
// }

// Do while loop will always run at least once even when the condition is false
// Use this loop when when you want a block of code to run at least one time
do {
  console.log('Number ' + i);
  i++;
} while(i <= 20);