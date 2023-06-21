// Using properties already selected to select other elements 
let output;

// Get child elements from the parent
const parent = document.querySelector('.parent'); // Gives that div with the class of parent
// Use the children property to get the children elements from the parent
output = parent.children; // HTMLCollection of all the div elements inside the div element with the class of parent
output = parent.children[1]; // Second Child in the HTML collection
output = parent.children[1].innerText; // Child 2
output = parent.children[1].className; // child
output = parent.children[1].nodeName; // DIV (this will return what kind of html element it is if I changed these from div to li then it would return LI)

// Changing elements
parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

// Get the first element child from the parent (not to be confused with firstChild)
parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// Get parent elements from a child
const child = document.querySelector('.child'); // Remember only selecting the first child use querySelectorAll to grab all children
output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// Get sibling elements
const secondItem = document.querySelector('.child:nth-child(2'); // Grabbing the 2nd child
output = secondItem;

// Get the next sibling from second item
output = secondItem.nextElementSibling; // Child Three
secondItem.nextElementSibling.style.color = 'green';
// Get the previous sibling from second item
secondItem.previousElementSibling.style.color = 'orange';

console.log(output);