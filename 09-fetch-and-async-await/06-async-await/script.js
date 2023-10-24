// This brad's preferred method over .then() syntax learning async await AND .then() is important
// This is brad's favorite way, mine might be .then() syntax just gotta play around

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({name: 'John', age: 20});
  }, 1000);
})

// promise.then(data => console.log(data));

// Async Await needs to be in function that is Aysnchronous
async function getPromise() {
  // line 10 would likely be in a function anyway
  
  // once the async operation is complete the promise will be placed into the response variable
  // This is what the await keyword is doing
  const response = await promise;
  console.log(response);

}

// getPromise();

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // no need to place a .then() because we are awaiting on the request
  // once we get the responce it will be placed into res
  const data = await res.json();
  console.log(data);
}

getUsers(); // Logs 10 users

// To many devs Async await is cleaner code

// Comparison
async function getUsersAsync() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}

// Compared to
function getUsersThen() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
}

// Using Async with arrow functions
const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
}

getPosts();