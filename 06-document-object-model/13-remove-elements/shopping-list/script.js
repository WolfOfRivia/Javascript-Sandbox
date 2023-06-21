// Removing Elements
function removeClearButton() {
  document.querySelector('#clear').remove();
}

function removeFirstItem() {
  const parent = document.querySelector('ul');
  const child = document.querySelector('li');
  parent.removeChild(child);
}

// Remove item (I wrote this one)
function removeItem(indexNum) {

  const items = document.querySelectorAll('li');
  items.forEach((item, index) => (index === indexNum) ? item.remove() : null);

}

// Remove item using the remove child method
function removeItem2(indexNum) {
  // parent
  const ul = document.querySelector('ul');
  // child to remove
  const li = document.querySelector(`li:nth-child(${indexNum})`);
  ul.removeChild(li);
}

// another way with queryselectorall
function removeItem3(indexNum) {
  // parent
  const ul = document.querySelector('ul');
  // get children
  const li = document.querySelectorAll('li')[indexNum - 1];
  ul.removeChild(li);
}

function removeItem4(indexNum) {
  const li = document.querySelectorAll('li');
  li[indexNum - 1].remove();
}

const removeItem5 = (indexNum) =>
  document.querySelectorAll('li')[indexNum - 1].remove();

removeClearButton();
// removeFirstItem();
// removeItem(1);
// removeItem3(2);
// removeItem4(1);
removeItem5(2);

// There's so many ways to do this just pick one lol