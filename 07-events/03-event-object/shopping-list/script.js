const logo = document.querySelector('img');

function onClick(e) {
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.type);
  console.log(e.timeStamp);
  // console.log(e.clientX);
  // console.log(e.clientY);
  // console.log(e.offsetX);
  // console.log(e.offsetY);
  // console.log(e.pageX);
  // console.log(e.pageY);
  // console.log(e.screenX);
  // console.log(e.screenY);
}

function onDrag(e) {
  document.querySelector('h1').textContent = `x-axis: ${e.clientX} y-axis: ${e.clientY}`;
}

logo.addEventListener('click', onClick);

// how current target would be different (This is called event bubbling)
// document.body.addEventListener('click', (e) => {
//   console.log(e.target); // will return whatever we click on
//   console.log(e.currentTarget); // will return the body element (since the event is attached to the body)
// })

/*
  - `target` - The element that triggered the event
  - `currentTarget` - The element that the event listener is attached to (The same in our case)
  - `type` - The type of event that was triggered
  - `timeStamp` - The time that the event was triggered
  - `clientX` - The x position of the mouse click event relative to the window
  - `clientY` - The y position of the mouse click event relative to the window
  - `offsetX` - The x position of the mouse click event relative to the element
  - `offsetY` - The y position of the mouse click event relative to the element
  - `pageX` - The x position of the mouse click event relative to the page
  - `pageY` - The y position of the mouse click event relative to the page
  - `screenX` - The x position of the mouse click event relative to the screen (screen is the entire monitor)
  - `screenY` - The y position of the mouse click event relative to the screen
*/

logo.addEventListener('drag', onDrag);