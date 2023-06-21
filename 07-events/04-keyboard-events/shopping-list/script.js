const itemInput = document.getElementById('item-input');

const onKeypress = e => {
  console.log('On Keypress');
}

const onKeyup = e => {
  console.log('On Key Up');
}

const onKeydown = e => {
  console.log('On Key Down');
  // Key
  console.log(e.key);
  // keycode
  console.log(e.keyCode);
  // code
  console.log(e.code);

  // Checking if holding a key
  if(e.repeat) {
    console.log('You are holding down ' + e.key);
  }
}

// happens when you tap anykey and even holding the key
// itemInput.addEventListener('keypress', onKeypress);

// happens when releasing a key after a press or down
// itemInput.addEventListener('keyup', onKeyup);

// happens when pressing down on a key AND holding a key
itemInput.addEventListener('keydown', onKeydown);


