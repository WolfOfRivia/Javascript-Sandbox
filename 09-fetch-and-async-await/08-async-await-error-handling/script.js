// The try catch is the most common way of handling errors with async await
// const getUsers = async () => {
//   try {
//     // const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     // const data = await response.json();
//     const response = await fetch('https://httpstat.us/404');
//     const data = await response.text(); // This site returns text data
//     console.log(data); // This will also still run however we don't want this block to run if we get a 404 or 500 that's where line 14 comes in on how to handle this
//   } catch(error) {
//     console.log(error);
//   }
// }

const getUsers = async () => {
  try {
    const response = await fetch('https://httpstat.us/404');
    if(!response.ok) {
      throw new Error('Request Failed');
    }
    const data = await response.text();
    console.log(data); // Now this isn't running
  } catch(error) {
    console.log(error); // This DOES run and logs the 'Request Failed' I passed in
  }
}

// getUsers();

// const getPosts = async () => {
//   // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const response = await fetch('https://httpstat.us/500');
//   /*
//     We get an uncaught, it shows the 500 error but also shows and uncaught because the error isn't being caught anywhere
//   */
//   if(!response.ok) {
//     throw new Error('Request Failed');
//   }
//   const data = await response.json();
//   console.log(data); // Now this isn't running
// }

// getPosts();

// We can solve this by putting the .catch() syntax on the function itself as we call it
const getPosts2 = async () => {
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const response = await fetch('https://httpstat.us/500');
  if(!response.ok) {
    throw new Error('Request Failed');
  }
  const data = await response.json();
  console.log(data); // Now this isn't running
}

getPosts2().catch(error => console.log(error)); // Request failed from line 49