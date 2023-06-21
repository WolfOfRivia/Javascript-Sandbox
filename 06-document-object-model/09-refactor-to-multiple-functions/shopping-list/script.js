// How people write code is all preference but Brad is using functions here to clean up the code from the last lesson
// It just makes things easier and more readable

function createNewItem(item) {
  // Get parent
  const list = document.querySelector('.items');
  // Create new list item
  const listItem = document.createElement('li');
  // Add attributes
  listItem.className = 'item';
  // Create Delete Button
  // const deleteBtn = createButton('remove-item btn-link text-red');
  // add text to listItem
  const text = document.createTextNode(item);
  // append text to li
  listItem.appendChild(text);
  // append deletebtn to list item
  listItem.appendChild(createButton('remove-item btn-link text-red')); // You can also call the create button function in append child (this one or line 12 will work)
  // append list item to list
  list.appendChild(listItem);
}

// Create Button
function createButton(classes) { 
    // create delete button
    const deleteBtn = document.createElement('button');
    // add attr to button
    deleteBtn.className = classes;
    // create icon
    const icon = createIcon('fa-solid fa-xmark');
    // append icon
    deleteBtn.appendChild(icon);
    // return for later use
    return deleteBtn;
}

// Create Icon
function createIcon(classes) { 
    // x mark icon
    const icon = document.createElement('i');
    // add attrs
    icon.className = classes;
    // return for later use
    return icon;
}

createNewItem('Cheese');
createNewItem('Steak');
createNewItem('Butter');