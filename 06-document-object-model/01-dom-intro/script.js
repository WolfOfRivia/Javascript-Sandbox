// Dom Intro
// console.log(window.document); // Shows document

// console.dir(window.document); // Shows properties and methods

// console.log(document.body); // Shows the body element

// console.log(document.body.innerHTML) // Gets the html elements within the body

// console.log(document.body.innerText) // Get the just the text in the body (doesn't include the tags, thats what innerHTML is for)

// Get all the links
// console.log(document.links) // Returns an html collection of all the links on the site, works just like an array

// Get first link in the collection
// console.log(document.links[0]) // Returns freecodecamp

// You can also change the document.body it's not read only
// document.body.innerHTML = '<h1>Hello World</h1>'; // Changes the entire page to just an h1 tag with Hello World

// Methods on document object
// document.write('Hello from Js'); // You don't see this used often but it's there if you need it

// Methods to select certain elements in the dom

// log and Select the #main id from the html document
console.log(document.getElementById('main')); // Shows the main element and all it's children in the console

// You can store that in a variable too
const main = document.getElementById('main'); // If I logged this it shows the same as line 27

// Change the html
// main.innerHTML = '<h1>Hello From Main</h1>'; // Instead of like we did on line 19 replacing content for the entire doc, we only replaced content for a specific element

// Select anything you want with queryselector

// Selecting the h1 from the #main element and change the text
document.querySelector('#main h1').innerText = 'Changed through querySelector';


