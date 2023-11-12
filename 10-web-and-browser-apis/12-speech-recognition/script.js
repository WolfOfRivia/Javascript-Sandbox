const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

// Set language
rec.lang = 'en-US';
// Set continuous (If false, it listens onces when running then stops, if true it continues to listen for speech patterns)
rec.continuous = true;

// create handler
rec.onresult = function(e) {
  console.log(e.results);
}

// Start listening
rec.start();

// For some reason I con't get any of this to work so won't resume lesson