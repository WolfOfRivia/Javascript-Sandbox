// adding event listeners
/*
  NOT RECOMMENDED!! 
  This is called Inline Event Listeners
  One way of adding event listeners is to add the event on the element in the HTML doc (It's an option, but don't do this.)
*/

// Javascript Event Listener (Do this)
const clearBtn = document.querySelector('#clear');

// function onClear() {
//   alert('All Clear');
// }

// There's this way
// clearBtn.onClick = function() {
//   alert('cleared');
// }

// The most modern way (use addeventlistener add your two arguments, the event and the callback function)
// clearBtn.addEventListener('click', function() {
//   alert('Cleared');
// })

// Shortening the event
// clearBtn.addEventListener('click', () => {
//   alert('Cleared');
// })

// Even shorter since it's just a one liner
// clearBtn.addEventListener('click', () => alert('cleared'));

// You can also call an named function
// clearBtn.addEventListener('click', onClear);

// With add event listener you can have as many events as you want
// clearBtn.addEventListener('click', () => {
//   console.log('Cleared');
// });
// clearBtn.addEventListener('click', onClear);

// Removing event listeners
// After 5 secs on browser load this event will be removed
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// Trigger an event
// After five secs the script will actually click this button instead of you manually doing it.
// setTimeout(() => clearBtn.click(), 5000);


// Challenge make the clear button actually clear all items in the list
function clearList() {
  const listItems = document.querySelectorAll('li');
  listItems.forEach(item => item.remove())

  // Other methods

  // Not the greatest performance
  // const itemList = document.querySelector('ul');
  // itemList.innerHTML = '';

  // Great performance
  // const itemList = document.querySelector('ul');

  // This loop will check if item list has children and keep removing the first child until it's empty
  // while(itemList.firstChild) {
  //   itemList.removeChild(itemList.firstChild)
  // }
}

clearBtn.addEventListener('click', clearList);
