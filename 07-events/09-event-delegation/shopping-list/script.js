const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// This works
// listItems.forEach(item => {
//   item.addEventListener('click', (e) => {
//     console.log(e.target);
//     e.target.remove();
//   })
// })

// But event deleagtion makes this more efficient
// Adding the event listener to the parent of all the list items
list.addEventListener('click', (e) => {
  console.log(e.target);
  if(e.target.tagName === 'LI') {
    e.target.remove();
  }
})

list.addEventListener('mouseover', (e) => {
  console.log(e.target);
  if(e.target.tagName === 'LI') {
    e.target.style.color = 'red';
  }
})

// the above is just a nicer a way of adding events to multiple elements by just adding it to the parent element