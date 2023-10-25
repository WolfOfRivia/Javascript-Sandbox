// function getData(endpoint) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', endpoint);

//     xhr.onreadystatechange = function() {

//       if(this.readyState === 4) {
//         if(this.status === 200) {
//           resolve(JSON.parse(this.responseText));
//         } else {
//           reject('Error: Something went wrong.');
//         }
        
//       }

//     }

//     setTimeout(() => {
//       xhr.send();
//     }, Math.floor(Math.random() * 3000) + 1000) // between 1000 and 40000
//   })
// }

// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => {
//     console.log(error);
//   })

// Doing the same functionality but with Async Await

// Getting Movies
// async function getAllData() {
//   const movies = await getData('./movies.json');
//   console.log(movies);
// }

// Getting Movies Actors and Directors
// async function getAllData() {
//   const movies = await getData('./movies.json');
//   console.log(movies);
//   const actors = await getData('./actors.json');
//   console.log(actors);
//   const directors = await getData('./directors.json');
//   console.log(directors);
// }

// You could also do
// async function getAllData() {
//   const movies = await getData('./movies.json');
//   const actors = await getData('./actors.json');
//   const directors = await getData('./directors.json');
//   console.log(movies, actors, directors); // Get's them all first then they show up (Once directors is done loading)
// }

// Other lines of code won't run until all data is requested
// async function getAllData() {
//   const movies = await getData('./movies.json');
//   const actors = await getData('./actors.json');
//   const directors = await getData('./directors.json');
//   console.log(movies, actors, directors);
//   console.log(123); // Won't run until lines 70 - 74 are done This whole function is asynchronous though
// }

// async function getAllData() {
//   const movies = await getData('./movies.json');
//   const actors = await getData('./actors.json');
//   const directors = await getData('./directors.json');
//   console.log(movies, actors, directors);
//   console.log(123); // Still won't run until data is don't with http request
// }

// getAllData();

// console.log(123) // Will run anyway, any code after asynchronous code will still run like normal

// We will run the same function however this time we will use fetch instead of XHRhttpRequest
async function getAllDataWithFetch() {
  const moviesRes = await fetch('./movies.json');
  const movies = await moviesRes.json();

  const actorsRes = await fetch('./actors.json');
  const actors = await actorsRes.json();

  const directorsRes = await fetch('./directors.json');
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}

// Getting data with Promise.all
async function getAllDataPromiseAll() { 
  const [moviesRes, actorsRes, directorsRes] = await Promise.all([
    fetch('./movies.json'),
    fetch('./actors.json'),
    fetch('./directors.json'),
  ])

  const movies = await moviesRes.json();
  const actors = await actorsRes.json();
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}

// Getting data with Promise.all but if you still want to use .then() instead of separate variables
async function getAllDataPromiseAll2() { 
  const [movies, actors, directors] = await Promise.all([
    fetch('./movies.json')
      .then(res => res.json()),
    fetch('./actors.json')
      .then(res => res.json()),
    fetch('./directors.json')
      .then(res => res.json()),
  ])

  console.log(movies, actors, directors);
}

// getAllDataWithFetch();
getAllDataPromiseAll();
getAllDataPromiseAll2();

// It Ultimately how you choose to do your code and what works best for you, what reads best for you