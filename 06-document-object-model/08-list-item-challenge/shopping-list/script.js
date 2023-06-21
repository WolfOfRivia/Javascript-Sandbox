// MY CODE Below

// Get parent
const list = document.querySelector('.items');
// Create new list item
const listItem = document.createElement('li');
// Add attributes
listItem.className = 'item';
// create delete button
const deleteBtn = document.createElement('button');
// add attr to button
deleteBtn.className = 'remove-item btn-link text-red';
// x mark
const xMark = document.createElement('i');
// add attrs
xMark.className = 'fa-solid fa-xmark';
// append xmark to delete button
deleteBtn.appendChild(xMark);
// add text to listItem
const text = document.createTextNode('Steak');
// append text to li
listItem.appendChild(text);
// append deletebtn to list item
listItem.appendChild(deleteBtn);
// append list item to list
list.appendChild(listItem);

// BRAD
// Quick and Dirty
function createListItem(item) {
  const li = document.createElement('li');

  li.innerHTML = `${item}
                  <button class="remove-item btn-link text-red">
                    <i class="fa-solid fa-xmark"></i>
                  </button>`;

  document.querySelector('.items').appendChild(li);
}

// Clean & Performant (This method is preferred as it results in better pefermance and less issues)
function createNewItem(item) {
  // Get parent
  const list = document.querySelector('.items');
  // Create new list item
  const listItem = document.createElement('li');
  // Add attributes
  listItem.className = 'item';
  // create delete button
  const deleteBtn = document.createElement('button');
  // add attr to button
  deleteBtn.className = 'remove-item btn-link text-red';
  // x mark
  const xMark = document.createElement('i');
  // add attrs
  xMark.className = 'fa-solid fa-xmark';
  // append xmark to delete button
  deleteBtn.appendChild(xMark);
  // add text to listItem
  const text = document.createTextNode(item);
  // append text to li
  listItem.appendChild(text);
  // append deletebtn to list item
  listItem.appendChild(deleteBtn);
  // append list item to list
  list.appendChild(listItem);
}

createListItem('Eggs');
createNewItem('Cheese');