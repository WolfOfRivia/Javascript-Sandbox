// Create an Interval ID, setInterval returns an ID
// const intervalID = setInterval(myCallback, 1000);

// function myCallback() {
//   console.log(Date.now());
// }

// You can also pass in arguments
// const intervalID = setInterval(myCallback, 1000, 'Hello');

// function myCallback(a) {
//   console.log(a, Date.now()); // Logs Hello and date
// }


// function stopChange() {
//   clearInterval(intervalID); // Pass in the interval ID
// }

// document.getElementById('stop').addEventListener('click', stopChange);

// Let's change background color
let intervalID;

function startChange() {
  // Check if interval is running
  if(!intervalID) {
    intervalID = setInterval(changeRandomColor, 1000);
  }
}

function stopChange() {
  clearInterval(intervalID); // Pass in the interval ID
}

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}

// function changeColor() {
//   // Doing a black and white alternate first
//   if(document.body.style.backgroundColor != 'black') {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// }

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);