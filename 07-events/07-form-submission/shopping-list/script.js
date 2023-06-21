const form = document.getElementById('item-form');

function onSubmit(e) {
  e.preventDefault();
  console.log('Submit');
  // If you use prevent default you'll want to get the values from the form
  // we already know e.target.value there's another way too called the form object
  const item = document.getElementById('item-input').value; // Brad usually does it this way
  const priority = document.getElementById('priority-input');

  // form validation IN REAL LIFE: You have validation for front end AND back end but this is just front end for now
  if(item === '' || priority.value === '0') {
    alert('Please fill in all fields');
    return; // If this condition is met the entire script stops here so the console long on line 17 won't happen
  }

  console.log(item, priority.value); // but variable.value works too all your preference

}

// Form Data Object (newer methods)
function onSubmit2(e) {
  e.preventDefault();
  const formData = new FormData(form);

  console.log(formData);
  const item = formData.get('item'); // The item here is the name="item" attribute on the input element itself in the HTML
  const priority = formData.get('priority');

  console.log(item, priority);

  // Get all entries with the entries method
  const entries = formData.entries();
  console.log(entries); // gives a form iterators essentially allows you to loop through it

  // using a for of loop
  for (let entry of entries) {
    console.log(entry); // gives an array with both the name and value
    console.log(entry[1]);
  }
}

form.addEventListener('submit', onSubmit2);