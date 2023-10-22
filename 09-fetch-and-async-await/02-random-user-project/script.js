/*
  Fetch Random User Project
  - Fetch data
  - Return JSON data
  - Display data in the DOM
  - Store all actions above in a function called getUser
  - Call getUser with the generate user button
  - call getUser on page load 
  - colors for male are steelblue
  - colors for female are rebeccapurple
*/
// This is my code, it will be replaced with the course code later but it did accomplish the task.

// Get Elements
const userEl = document.getElementById('user');
const userBtn = document.getElementById('generate');
const spinner = document.querySelector('.spinner');

function getUser() {

  // Get data
  spinner.classList.remove('hidden');
  fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results[0]);
      displayUser(data.results[0]);
      spinner.classList.add('hidden');
    })
    .catch((error) => {
      console.log(error);
    })

  function displayUser(user) {

    // Show US State if User is from United States
    let formatLocation;
    if(user.location.country === 'United States') {
      formatLocation = user.location.state;
    } else {
      formatLocation = user.location.country
    }

    // Change background color based on gender
    let bgColor;
    if(user.gender === 'female') {
      bgColor = 'rebeccapurple';
    } else {
      bgColor = 'steelblue';
    }

    document.querySelector('body').style.backgroundColor = bgColor;

    userEl.innerHTML = `
      <div class="flex justify-between">
        <div class="flex">
          <img src="${user.picture.large}" alt="" class="w-48 h-48 rounded-full mr-8">
          <div class="space-y-3">
            <p class="text-xl">
              <span class="font-bold">Name:</span>
              ${user.name.first} ${user.name.last} 
            </p>
            <p class="text-xl">
              <span class="font-bold">Email:</span>
              ${user.email} 
            </p>
            <p class="text-xl">
              <span class="font-bold">Phone:</span>
              ${user.phone} 
            </p>
            <p class="text-xl">
              <span class="font-bold">Location:</span>
              ${user.location.city}, ${formatLocation} 
            </p>
            <p class="text-xl">
              <span class="font-bold">Age:</span>
              ${user.dob.age} 
            </p>
          </div>
        </div>
      </div>`;
  }

}

userBtn.addEventListener('click', getUser);
window.addEventListener('DOMContentLoaded', getUser);