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
// This code below is the course code
function fetchUser() {
  showSpinner();
  fetch('https://randomuser.me/api')
    .then((res) => {
      // Following what we learned in the error handling section, we have returned to this project and now added a way to handle failed requests
      if(!res.ok) {
        throw new Error('Request Failed');
      }
      return res.json();
    })
    .then((data) => {
      // console.log(data.results[0]);
      hideSpinner();
      displayUser(data.results[0]);
    })
    .catch((error) => {
      hideSpinner();
      document.querySelector('#user').innerHTML = `
        <p class="text-xl text-center text-red-500 mb-5">${error}</p>
      `;
    })
}

function displayUser(user) {
  const userDisplay = document.querySelector('#user');

  if(user.gender === 'female') {
    document.body.style.backgroundColor = 'rebeccapurple';
  } else {
    document.body.style.backgroundColor = 'steelblue';
  }

  userDisplay.innerHTML = `
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
          ${user.location.city}, ${user.location.country}
        </p>
        <p class="text-xl">
          <span class="font-bold">Age:</span>
          ${user.dob.age}
        </p>
      </div>
    </div>
  </div>`;
}

function showSpinner() {
  document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner() {
  document.querySelector('.spinner').style.display = 'none';
}

document.querySelector('#generate').addEventListener('click', fetchUser);

fetchUser();