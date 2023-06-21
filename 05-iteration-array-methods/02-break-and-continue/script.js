// Break allows us to break out of the loop
// for (let i = 0; i <= 20; i++) {
//   if(i === 15) {
//     console.log('Breaking...')
//     break;
//   }
//   console.log(i);
// }

// Continue
// Allows you to skip code in the current iteration and contine to the next
for (let i = 0; i <= 20; i++) {
  if(i === 13) {
    console.log('Skipping 13...')
    continue;
  }
  console.log(i);
}