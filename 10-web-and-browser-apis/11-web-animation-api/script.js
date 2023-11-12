// We are taking the animation keyframe and doing it here instead using web animations
const ball = document.getElementById('ball');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const reverse = document.getElementById('reverse');
const speedUp = document.getElementById('speed-up');
const slowDown = document.getElementById('slow-down');

// create an array of the animation
const rollAnimation = [
  {
    transform: 'rotate(0) translate3D(-50%, -50%, 0)', 
    color: 'white'
  },
  {
    color: 'blue',
    offset: 0.3
  },
  {
    transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', 
    color: 'white'
  },
]

const rollOptions = {
  duration: 3000,
  iterations: Infinity
}

const roll = ball.animate(rollAnimation, rollOptions);

pause.addEventListener('click', () => roll.pause());
play.addEventListener('click', () => {
  roll.playbackRate = 1;
  roll.play();
});
reverse.addEventListener('click', () => roll.reverse()); // By default reverse doesn't reverse the animation AND keep going, it only goes as many times as the loop completed
speedUp.addEventListener('click', 
() => (roll.playbackRate = roll.playbackRate * 2));
slowDown.addEventListener('click', 
() => (roll.playbackRate = roll.playbackRate * 0.5));

// I can see uses for this tool when it comes to creating animations OR dissecting someone else's animations to see how they work, thanks to the slow down controls