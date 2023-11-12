const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timeStamp = document.getElementById('timestamp');

function playPause() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function stopVideo() {
  video.pause();
  video.currentTime = 0;
  play.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
}

function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;
  // Get minutes
  let minutes = Math.floor(video.currentTime / 60);
  if(minutes < 10) {
    minutes = '0' + String(minutes);
  }

  // Get seconds
  let seconds = Math.floor(video.currentTime % 60);
  if(seconds < 10) {
    seconds = '0' + String(seconds);
  }

  timeStamp.innerHTML = `${minutes}:${seconds}`;
}

function setProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
  /*
    NOTE: the +progress.value is exactly the same as parseInt(progress.value)
    It's just another way of converting from a string to integer.
  */
}

function updateIcon() {
  if(video.paused) {
    play.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
  } else {
    play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
  }
}

function initVideo() {
  video.addEventListener('click', playPause)
  video.addEventListener('pause', updateIcon);
  video.addEventListener('play', updateIcon);
  play.addEventListener('click', playPause);
  stop.addEventListener('click', stopVideo);
  video.addEventListener('timeupdate', updateProgress);
  progress.addEventListener('click', setProgress);
}

initVideo();