const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const currentTime = document.getElementById('current-time');
const volume = document.getElementById('volume');

console.log(audio);

play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());
stop.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

// Display current time in DOM
audio.addEventListener('timeupdate', () => {
  currentTime.innerText = audio.currentTime;
});

// Change volume
volume.addEventListener('change', () => (audio.volume = volume.value));