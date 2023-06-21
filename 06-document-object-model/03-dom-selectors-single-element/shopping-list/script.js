// document.getElementById()
console.log(document.getElementById('app-title'));
// get Id attribute of an element
console.log(document.getElementById('app-title').id); // app-title
// get class attribute of an element
console.log(document.getElementById('app-title').className); // app-title-class
// however get attribute lets you get any attribute from an element
console.log(document.getElementById('app-title').getAttribute('id')); // app-title

// set attributes
// document.getElementById('app-title').id = 'new-id'; // the element that had the id app-title has now been changed to new-id
// console.log(document.getElementById('app-title')); // so now when we try to grab that same element it will not work it no longer has this id
// add a title attribute
document.getElementById('app-title').title = 'Shopping List';
// using the set attribute method
document.getElementById('app-title').setAttribute('class', 'title');

// store the selector in a variable
const title = document.getElementById('app-title');
// console.log(title);

// There's a lot of things you can do when you bring in an element from the dom

// Get/change content
// console.log(title.textContent); // Shopping List
// Change the content
title.textContent = 'Hello World';
title.innerText = 'Hello Again'; // There are differences between textContent and innerText but innerText is more common
// use html tags
title.innerHTML = '<strong>Shopping List</strong>';

// change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '1rem';
title.style.borderRadius = '1rem';

// document.querySelector()
// Selecting by tag
// console.log(document.querySelector('h1')); // Only selects ONE element so if there's more h1 tags on a page it only grabs the first one
// selecting by id
// console.log(document.querySelector('#app-title'));
// selecting by class
// console.log(document.querySelector('.container'));
// selecting by attribute
// console.log(document.querySelector('input[type ="text"]')); // grabbing any input with a type of text
// selecting by pseudo selectors
// console.log(document.querySelector('li:nth-child(2')); // gives me the 2nd list item in a list
// you can do whatever with your selected element
// console.log(document.querySelector('li:nth-child(2)').innerText); // gives the inner text from the 2nd list item (Orange Juice)

// Storing in variable
const secondItem = document.querySelector('li:nth-child(2)');
console.log(secondItem);
// Set the inner text of the second item
secondItem.innerText = 'Apple Juice';
// Change the color
secondItem.style.color = 'Red';

// Use these methods on other elements
const list = document.querySelector('ul');
console.log(list);
// You can use querySelector on the list it doesn't have to just be on the document
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';
