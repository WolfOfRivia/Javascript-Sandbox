// querySelectorAll() // You'll probably always use this
const listItems = document.querySelectorAll('.item');
console.log(listItems); // Gives a nodeList an array like structure with Nodelist high order array methods are allowed

// First nodelist item
console.log(listItems[0]) // the list item apples
// first nodelist item text
console.log(listItems[0].innerText) // Apples
// lets make all the text for these nodelist items red
// listItems.forEach((item) => {
//   item.style.color = 'red';
// })

// Why not even remove one item? add an index (whatever you want to call it to foreach)
// listItems.forEach((item, index) => {
//   item.style.color = 'red';
//   if(index === 1) {
//     item.remove();
//   }

//   // change the text of the first one
//   // if (index === 0) {
//   //   item.innerText = 'Steak'; // this also removed the delete button from the element keep that in mind
//   // }

//   // You can get around this in many ways but here's a template string and using innerHTML
//   if (index === 0) {
//     item.innerHTML = `Steak <i class="fa-solid fa-xmark"></i>`; // this also removed the delete button from the element keep that in mind
//   }
// })

// Other ways to select multipe elements

// Get all elements of specific class
const listItems2 = document.getElementsByClassName('item');
console.log(listItems2); // This is an HTMLCollection not a NodeList

// but remember you can convert it to an array
const listItemsArray = Array.from(listItems2);
console.log(listItemsArray); // Now it's an array

// Get all elements of specific tag
const listItems3 = document.getElementsByTagName('li');
console.log(listItems3); // HTMLCollection