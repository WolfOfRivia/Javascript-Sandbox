// Create a promise in a variable
const promise = new Promise((resolve, reject) => {
  // Do some async task
  setTimeout(() => {
    console.log('Async task complete');
    resolve();
  }, 1000);
});

promise.then(() => {
  console.log('Promise consumed..');
});

// You can also do it without creating a variable
// new Promise((resolve, reject) => {
//   // Do some async task
//   setTimeout(() => {
//     // console.log('Async task 2 complete');
//     resolve({name: 'John', age: 30});
//   }, 1000);
// }).then((user) => console.log(user));

// console.log('Hello from global scope.');

// Handling errors
const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if(!error) {
      resolve({name: 'John', age: 30});
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

getUser
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log('The promise has been resolved or rejected')); // Brad said he doesn't use this one much

console.log('Hello from global scope.');