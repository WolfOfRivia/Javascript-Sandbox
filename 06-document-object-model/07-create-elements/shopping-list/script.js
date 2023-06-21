const div = document.createElement('div'); // creating div
div.className = 'my-element'; // adding class to div
div.id = 'my-element'; // adding id to div
div.setAttribute('title', 'My Element'); // adding attributes to div
// div.innerText = 'Hello World'; // add text to div (however Brad mentioned this isn't really the way to do it for creating any element)
// as innertext is mainly used to change the text of an already existing element

// Do it this way for newly created elements
const text = document.createTextNode('Hello World');
// now add it to the div with appendChild
div.appendChild(text);

// Now lets take this div we created an actually append it to the page because right now it only exists in memory
// document.body.appendChild(div); // this placed it in the body right before the script tag

// We can place it anywhere we want though
document.querySelector('ul').appendChild(div);

// console.log(div);