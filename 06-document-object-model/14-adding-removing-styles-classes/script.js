const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelectorAll('li');

function run() {
  // ClassName
  // console.log(itemList.className);
  // text.className = 'dark'; // classname overrides whatever classes were there
  // Using the classlist object is a better way of adding classes
  // add the class of dark
  // text.classList.add('dark'); // add dark class AND retains any class that were already on the element
  // remove a class
  // text.classList.remove('card'); // removes the dark class AND retains any class that were already on the element
  // toggle class
  text.classList.toggle('dark'); // adds OR removes dark class AND retains any class that were already on the element

  // there is a replace class
  text.classList.replace('card', 'dark'); // replaces the class of card with the class of dark AND retains any class that were already on the element

  // change style
  itemList.style.lineHeight = '3';

  // Do something to all the list items
  items.forEach((item, index) => {
    if(index === 2) {
      item.style.color = 'blue';
    } else {
      item.style.color = 'red';
    }
  });

}

document.querySelector('button').onclick = run;


