// Get form
const form = document.querySelector('form');
// Save clock style
const clockStyle = {
  faceColor: form.querySelector('#face-color').value,
  borderColor: form.querySelector('#border-color').value,
  lineColor: form.querySelector('#line-color').value,
  largeHandsColor: form.querySelector('#large-hand-color').value,
  secondHandColor: form.querySelector('#second-hand-color').value
}

function clock() {  
  const now = new Date();
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Setup canvas
  ctx.save(); // Save the default state
  ctx.clearRect(0, 0, 500, 500); // Clear rectangle 
  ctx.translate(250, 250); // Place the clock in the middle of the canvas
  ctx.rotate(-Math.PI / 2); // Rotate clock -90deg to get the correct time

  // Set default styles
  ctx.strokeStyle = clockStyle.lineColor;
  ctx.fillStyle = clockStyle.faceColor;
  ctx.lineWidth = 5;
  ctx.lineCap = 'round'; // Lines will have a rounded end

  // Draw clock face/border
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = clockStyle.borderColor; // Only applies to the clock because it is in between the save state and restore state (Lines 19 through 21)
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();
  
  // Draw hour lines
  ctx.save();
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6); // Gives the number of hour lines doubled by whatever number we entered (so 6 will give us 12)
    ctx.moveTo(135, 0); // Relative to the translate we set on line 9
    ctx.lineTo(124, 0); // Relative to the translate we set on line 9
    ctx.stroke();
  }
  ctx.restore();

  // Draw minute lines
  ctx.save();
  ctx.lineWidth = 4;
  for (let i = 0; i < 60; i++) {
    // This makes it so a minute line doesn't appear where an hour line is located
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(134, 0); // Relative to the translate we set on line 9
      ctx.lineTo(136, 0); // Relative to the translate we set on line 9
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  // Get current time
  const hr = now.getHours() % 12;
  const min = now.getMinutes();
  const sec = now.getSeconds();

  // Draw hour hand
  ctx.save();
  ctx.rotate((Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
  ctx.strokeStyle = clockStyle.largeHandsColor;
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(80, 0)
  ctx.stroke();
  ctx.restore();

  // Draw minute hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.strokeStyle = clockStyle.largeHandsColor;
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(112, 0)
  ctx.stroke();
  ctx.restore();

  // Draw second hand
  ctx.save();
  ctx.rotate((sec * Math.PI / 30));
  ctx.strokeStyle = clockStyle.secondHandColor;
  ctx.fillStyle = clockStyle.secondHandColor;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(100, 0)
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  // console.log(`${hr}:${min}:${sec}`);

  ctx.restore(); // Restore default State
  requestAnimationFrame(clock);
}

requestAnimationFrame(clock);

console.log(clockStyle);
function updateClockStyle(e) {
  // switch(e.target.attribute('id'))
  switch(e.target.id) {
    case 'face-color':
      clockStyle.faceColor = e.target.value;
      break;
    case 'border-color':
      clockStyle.borderColor = e.target.value;
      break;
    case 'line-color':
      clockStyle.lineColor = e.target.value;
      break;
    case 'large-hand-color':
      clockStyle.largeHandsColor= e.target.value;
      break;
    case 'second-hand-color':
      clockStyle.secondHandColor = e.target.value;
      break;
  }
  console.log(clockStyle);
}

form.addEventListener('change', updateClockStyle);