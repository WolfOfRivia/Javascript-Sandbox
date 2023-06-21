let output;

// Child node property
const parent = document.querySelector('.parent');
output = parent.childNodes; // returns a nodelist (This returns everything including white space and comments as nodes)
output = parent.childNodes[0]; // #text (this is the white space)
output = parent.childNodes[0].textContent; // returns nothing (because it's white space)
output = parent.childNodes[0].nodeName; // #text
output = parent.childNodes[3].nodeName; // DIV
output = parent.childNodes[3].textContent; // Child 2
output = parent.childNodes[3].innerHTML; // Child 2 (there's no html in there but look at line 12)
output = parent.childNodes[3].outerHTML; // <div class="child">Child 2</div>

// Changing nodes
output = parent.childNodes[3].innerText = 'Child Two';
output = parent.childNodes[5].style.color = 'red';
output = parent.firstChild; // #text
output = parent.lastChild; // #text
parent.lastChild.textContent = 'Hello';

// Parent Node
const child = document.querySelector('.child');

output = child.parentNode; // Works the same as parentElement in this case it doesn't return white space or comments
child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// Siblings
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem;
output = secondItem.nextSibling; // #text (this does return white space and comments)
output = secondItem.previousSibling; // #text 

console.log(output);