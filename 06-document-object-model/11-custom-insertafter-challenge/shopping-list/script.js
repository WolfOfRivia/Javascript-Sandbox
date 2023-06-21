// There is an insertBefore but there is NOT an insertAfter
// The challenge here is to create a function that works like that.

// Create function
function insertAfter(element, afterEl) {
  afterEl.insertAdjacentElement('afterend', element);
}

const secondItem = document.querySelector('li:nth-child(3)');

function chosenEl(index) {
  return document.querySelector('li:nth-child('+index+')');
}

function createListItem(item) {
  const li = document.createElement('li');
  li.className = 'item';
  const text = document.createTextNode(item);
  li.appendChild(text);
  li.appendChild(createDeleteBtn('remove-item btn-link text-red'));
  return li;
}

function createDeleteBtn(classes) {
  const deleteBtn = document.createElement('button');
  deleteBtn.className = classes;
  deleteBtn.appendChild(createIcon('fa-solid fa-xmark'))
  return deleteBtn;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

insertAfter(createListItem('Steak'), secondItem);
insertAfter(createListItem('Bacon'), chosenEl(1)); // didn't want to keep selecting elements so I made the chosenEl function and it actually worked.
insertAfter(createListItem('Water'), chosenEl(5));

// BTW I DID ALL THE CODE ABOVE ON MY OWN!! I'm Proud!

// Below is brad
function insertAfter2(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

// My concern was what was going to happen upon reaching the end of the list but butter was still added after Milk so either of these worked
insertAfter2(createListItem('Butter'), chosenEl(7));