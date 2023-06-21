// function registerUser(user) {
//   return user + ' is registered';
//   // This is just an example, in real life if we did something like this we would connect to a database
// }

// Set user to default parameter
function registerUser(user = 'Bot') {
    return user + ' is registered';
    // This is just an example, in real life if we did something like this we would connect to a database
  }

console.log(registerUser('John'));

// Rest Params
// Remember the rest operator just creates an array of as many values as you want and can be named whatever you want
function sum(...numbers) {
  return numbers;
}

// I can put as many numbers here as I want
console.log(sum(1, 2, 3));

// An example loop brad showed
// the rest operator allows for an unlimited number of arguments
function sum2(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum2(5, 8, 9, 72))

// Objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'Tom',
}

// If it hasn't been made clear yet, the way to see returned values is to console.log the function
console.log(loginUser(user));

// You can also pass in the data like this
console.log(loginUser({
  id: 2,
  name: 'Sarah'
}));

// Arrays as params
// Get random number from the array
const myArray = [1, 8, 10, 30, 99, 2];

function getRandom(arr) {

  let random = Math.floor(Math.random() * arr.length);
  // console.log(arr[random]);
  return arr[random];

}

// getRandom(myArray);

console.log(getRandom(myArray));
