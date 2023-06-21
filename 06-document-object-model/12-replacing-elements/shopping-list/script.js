// Working with replacing items

// This is one way to replace elements
function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');
  li.textContent = 'Replaced First';

  firstItem.replaceWith(li);
}

// Another way
function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');

  secondItem.outerHTML = '<li>Replaced Second</li>';
}

// Replace items

function replaceAll() {

  const allItems = document.querySelectorAll('li');
  // allItems.forEach((item, index) => {
  //   // You can do outer html
  //   // item.outerHTML = `<li>Replaced Item ${index + 1}</li>`;
  //   // You can do inner html
  //   // item.innerHTML = 'Replaced Item ' + (index + 1);
  //   // you can do text content
  //   // item.textContent = 'Replaced Item ' + (index + 1);
  //   // You can do a specific item
  //   if(index === 1) {
  //     item.innerHTML = 'Second Item';
  //   } else {
  //     item.innerHTML = 'Replaced Item ' + (index + 1);
  //   }
  // })
  // Shortened version with ternary operator
  allItems.forEach((item, index) => (index === 1) ? item.innerHTML = 'Second Item' : item.innerHTML = 'Replaced Item ' + (index + 1));

}

// Replace child
function replaceChildHeader() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');
  const h2 = document.createElement('h2');
  h2.id = 'app-title';
  h2.textContent = 'Shopping List';
  header.replaceChild(h2, h1);
}

replaceFirstItem();
replaceSecondItem();
replaceAll();
replaceChildHeader();