const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = ['hey', 'summer', 'ukulele'];

// Keep track of song playing
let songIndex = 2;

// Initially load song details
loadSong(songs[songIndex]);

// Load song function
function loadSong(song) {

  // Update title
  title.innerText = song;
  // Get song audio source
  audio.src = `music/${song}.mp3`;
  // Update cover image
  cover.src = `images/${song}.jpg`;

}

// Play song function
function playSong() {
  // Update music container UI
  musicContainer.classList.add('play');
  // Change play button to pause
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  // Play Audio
  audio.play();
}

// Pause song function
function pauseSong() {
  // Update music container UI
  musicContainer.classList.remove('play');
  // Change pause button to play
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  // Pause audio
  audio.pause();
}

// Play previous song
function prevSong() {

  // Change song index by 1
  songIndex--;
  // Check if there is no previous song
  if(songIndex < 0) {
    songIndex = songs.length - 1;
  }

  // Load then play song
  loadSong(songs[songIndex]);
  playSong();

}

// Play next song
function nextSong() {

  // Change song index by 1
  songIndex++;
  // Check if there is no previous song
  if(songIndex > songs.length - 1) {
    songIndex = 0;
  }

  // Load then play song
  loadSong(songs[songIndex]);
  playSong();

}

// Update progressbar
function updateProgress(e) {
  // console.log(e.srcElement);
  // duration is the time length of the current audio element
  // currentTime is the current time point in the duration of the playing audio element
  // We are getting the percentage of how much the song is has completed and setting the progress bar width to it.
  const {duration, currentTime } = e.srcElement;
  const progressPrecent = (currentTime / duration) * 100;
  progress.style.width = `${progressPrecent}%`;
}

function setProgress(e) {

  const width = this.clientWidth; // The width of the progressbar (because that's where we clicked)
  const clickX = e.offsetX; // the x axis of where we clicked
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;

}

// Play song
playBtn.addEventListener('click', () => {

  // Check to see if song is playing
  const isPlaying = musicContainer.classList.contains('play');
  if(isPlaying) {
    pauseSong();
  } else {
    playSong();
  }

})

// Load previous song
prevBtn.addEventListener('click', prevSong);
// Load next song
nextBtn.addEventListener('click', nextSong);
// Update progressbar
audio.addEventListener('timeupdate', updateProgress);
// Click to a point in the progress bar
progressContainer.addEventListener('click', setProgress);