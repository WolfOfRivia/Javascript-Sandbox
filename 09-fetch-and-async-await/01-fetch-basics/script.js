// Using the Fetch API

// Fetching from JSON file
// This is a standard syntax
// fetch('./movies.json')
//   .then(response => {
//     // console.log(response); // Gives information on the response (NOT the data)
//     // Now lets get the data
//     return response.json(); 
//   })
//   .then((data) => {
//     console.log(data);
//   })

// Brad mentioned that code above can actually be cleaned up, so you can write less and accomplish the same goal.
fetch('./movies.json')
  .then((response) => response.json()) // this is called an implicit return
  .then((data) => console.log(data));

// Fetching a text file
fetch('./test.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));

// Fetching from an API
fetch('https://api.github.com/users/wolfofrivia')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // You can do whatever you want with the data once you have it.
    document.querySelector('h1').textContent = `${data.login}`;
  });

/* 
  One more thing to know, all of the above are making a GET request, if you don't specify
  what type of request to make, it defaults to a GET request
*/
