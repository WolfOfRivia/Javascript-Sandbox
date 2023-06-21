const logo = document.querySelector('img');

const onclick = () => console.log('Click Event');

const onDoubleClick = () => { 
  if(document.body.style.backgroundColor !== 'purple') {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = '#f5f5f5';
    document.body.style.color = '#333';
  }
  console.log('Double Click Event');
}

const onRightClick = () => {
  document.querySelector('.app-title-class').innerText = 'Ingredient List';
  console.log('Right Click Event');
}

const onMouseDown = () => {
  console.log('Mouse Down Event');
}

const onMouseUp = () => {
  console.log('Mouse Up Event');
}

const onMouseWheel = () => {
  console.log('Mouse Wheel Event');
}

const img = document.querySelector('img');

const onMouseOver = () => {
  
  if(img.classList.contains('mouseOut')) {
    img.classList.remove('mouseOut');
  }
  img.classList.add('mouseOver');
  console.log('Mouse Over Event');
}

const onMouseOut = () => {
  if(img.classList.contains('mouseOver')) {
    img.classList.remove('mouseOver');
  }
  img.classList.add('mouseOut');
  console.log('Mouse Out Event');
}

const onDragStart = () => {
  console.log('Drag Start Event');
}

const onDrag = () => {
  console.log('Drag Event');
}

const onDragEnd = () => {
  console.log('Drag End Event');
}


// Event Listeners at bottom of page
// click event
logo.addEventListener('click', onclick);

// double click
logo.addEventListener('dblclick', onDoubleClick);

// right click
logo.addEventListener('contextmenu', onRightClick);

// mousedown
logo.addEventListener('mousedown', onMouseDown); // mousedown means click and hold the mouse

// mouseup
logo.addEventListener('mouseup', onMouseUp); // when releaseing a mousedown event

// mousewheel
logo.addEventListener('wheel', onMouseWheel);

// There is no hover event but there is mouseover and mouseout which you could use to function like hover

// mouseover
logo.addEventListener('mouseover', onMouseOver);

// mouseout
logo.addEventListener('mouseout', onMouseOut);

// dragstart
logo.addEventListener('dragstart', onDragStart);

// drag
logo.addEventListener('drag', onDrag);

// dragend
logo.addEventListener('dragend', onDragEnd);