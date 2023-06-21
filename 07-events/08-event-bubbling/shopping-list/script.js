const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(4)');
const form = document.querySelector('form');

button.addEventListener('click', (e) => {
  alert('Button was clicked');
  // If you don't want event bubbling, use the stopPropogation() method
  e.stopPropagation();
})

div.addEventListener('click', () => {
  alert('Div was clicked');
})

form.addEventListener('click', () => {
  alert('Form was clicked');
})

document.body.addEventListener('click', () => {
  alert('body was clicked');
})

// All the bubbling means is pretty much any element that has a click event, if the parent also has a click event if will fire off that event too and keep going up 
// until all events have been completed