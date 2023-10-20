const xhr = new XMLHttpRequest();

// Fetching data from json file within your own directories
xhr.open('GET', './movies.json');

// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready
xhr.onreadystatechange = function() {
  // console.log(this.readyState); // will return 2, 3, and 4
  // You'll only want to do something with the readystate is 4 and the response status is successful
  // Check response status with .status property
  console.log(this.status); // returns 200 (three times) because Readystate 2 was 200, 3 was 200 and 4 was 200
  if(this.readyState === 4 && this.status === 200) {
    // Log response text
    // console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);
    data.forEach(movie => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
      document.querySelector('#results').appendChild(li);
    })
  }
}

xhr.send();

// Fetching data from an api
const xhr2 = new XMLHttpRequest();

xhr2.open('GET', 'https://api.github.com/users/wolfofrivia/repos');

xhr2.onreadystatechange = function() {
  if(this.readyState === 4 && this.status === 200) {
    const repos = JSON.parse(this.responseText);
    repos.forEach(repo => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
      document.querySelector('#results-2').appendChild(li);
    })
  }
}

xhr2.send();