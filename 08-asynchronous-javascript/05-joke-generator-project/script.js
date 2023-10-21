const btn = document.querySelector('#joke-btn');
const jokeContainer = document.querySelector('.joke');

function getJoke() {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(this.responseText);
      jokeContainer.innerHTML = `<p>${data.value}</p>`;
    }
  }

  xhr.send();
}

btn.addEventListener('click', getJoke);