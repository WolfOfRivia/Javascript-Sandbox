let output;

// The every property with a strikethrough is deprecated
output = document.all; // Returns HTMLALLCollection
output = document.all[10] // Retrurns the header from the HTMLALLCollection
output = document.all.length // 36

output = document.documentElement; // gives the HTML tag and everything in it (Works exactly like the elements tab in dev tools)
output = document.head; // gives the head element and its children
output = document.body; // gives the body element and its children

output = document.head.children; // gives a HTMLCollection of all the children in head element (Only gives direct children)
output = document.body.children; // gives a HTMLCollection of all the childrem in the body element (Only gives direct children)

output = document.doctype; // gives the document type if you need it
output = document.domain; // gives your domain localhost in this case
output = document.URL; // give domain plus any page you are on
output = document.charset; // gives the character set
output = document.characterSet; // gives the character set
output = document.contentType; // gives the content type

output = document.forms; // gives a HTMLCollection of all form elements
output = document.forms[0]; // gives specific form from HTMLCollection
output = document.forms[0].id; // gets the id attribute from the selected form in the collection
output = document.forms[0].method; // returns the method of the selected form element (it's always get by default unless you set method to something else in the form)
output = document.forms[0].action; // returns where form submits to in this case it's the page we are on since action isn't set

// Set the form id to a new id
// document.forms[0].id = 'new-id';

// output = document.links; // gives a HTMLCollection of all link(anchor) elements
// output = document.links[0]; // gives a specific link(anchor) from the HTMLCollection
// output = document.links[0].href; // gives the url from the specific link(anchor) in the HTMLCollection
// output = document.links[0].id = 'link-id-name'; // Set the id to the specific link(anchor) in the HTMLCollection
// output = document.links[0].href = 'new-url'; // Change the href to the specific link(anchor) in the HTMLCollection
// output = document.links[0].className = 'new-class-name'; // Change or set the class to the specific link(anchor) in the HTMLCollection
// output = document.links[0].classList; // Get a list (DOMTokenList) of all the classes to the specific link(anchor) in the HTMLCollection

output = document.images; // gives a HTMLCollection of image elements
output = document.images[0]; // gives a specific image from the HTMLCollection
output = document.images[0].src; // gives the source url from the specific image from the HTMLCollection


// HTML Collections are array like but array methods will not work on them (because they technically AREN'T a traditional array)

// This example throws an error
// document.forms.forEach((form) => console.log(form)); // document.forms.forEach is not a function

// You can convert an html collection to an array with the Array.from method
const forms = Array.from(document.forms);
// Now you can do a foreach
forms.forEach((form) => console.log(form))

console.log(output) // Just logging the output