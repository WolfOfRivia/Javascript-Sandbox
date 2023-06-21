const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
  // heading.textContent = e.target.value;
  console.log(e.target.value);
}

function onChecked(e) {
  console.log(e.target.checked); // Logs True if checked false if unchecked
  const isChecked = e.target.checked;
  // Change heading text based on checked status
  heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}

function onFocus() {
  console.log('Input is Focused');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'green';
}

function onBlur() {
  console.log('Input is not Focused');
  itemInput.style.outlineStyle = 'none';
}

// Brad suggests using input for your input fields as it also works with select fields and such
itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('input', onInput); // 'change' event does the same
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus); // input is in focus mode
itemInput.addEventListener('blur', onBlur); // input is out of focus mode
