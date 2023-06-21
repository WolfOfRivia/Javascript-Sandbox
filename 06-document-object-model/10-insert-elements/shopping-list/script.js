// insertAdjacentElement Example
function insertElement() {
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjacentElement';
  filter.insertAdjacentElement('beforebegin', h1);
}

// insertAdjacentText Example
function insertText() {
  const item = document.querySelector('li');

  item.insertAdjacentText('afterend', 'insertAdjacentText');
}

// insertAdjacentHTML Example
function insertHTML() {
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentHTML</h2>'); // this one works like innerHTML
}

// insertBefore Example
function insertBeforeItem() {
  /*
    insertBefore works like appendChild but there are some differences
    1. First bring in a parent
    2. Then choose a child inside the parent that you want to insert your new item before
  */

  // grabbing parent
  const ul = document.querySelector('ul');
  // create element we want to insert
  const li = document.createElement('li');
  li.textContent = 'insertBefore';

  // grab item inside the parent that we want to insert this item before
  const thirdItem = document.querySelector('li:nth-child(3');

  // call insertBefore (item you want to insert, item you want to place your new item before);
  // reminder insertBefore is called on the parent element
  ul.insertBefore(li, thirdItem); // places our new element before Oreos on the list

}

insertElement();
insertText();
insertHTML();
insertBeforeItem();

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/