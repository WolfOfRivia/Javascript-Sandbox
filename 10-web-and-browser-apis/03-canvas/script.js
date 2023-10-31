// Our Objective is to take the ball and animate it across the screen
const image = document.querySelector('img');
let start;
let done = false;

function step(timestamp) {
  if(start === undefined) {
    start = timestamp;
  }
  const elasped = timestamp - start; 
  if(elasped > 5000) { 
    done = true;
  }
  if(done) {
    return;
  }
  // console.log(elasped);
  image.style.transform = `translateX(${elasped / 20}px) rotate(${elasped}deg)`;
  requestAnimationFrame(step);
}

requestAnimationFrame(step);