// Get canvas
const canvas = document.getElementById('my-canvas');
// get canvas context object, getContext() is a method that can be called on a canvas element
const ctx = canvas.getContext('2d'); // Working with a 2d context

// Draw Rectangle
ctx.fillStyle = 'green'; // Is the fill area of the context we draw
ctx.fillRect(10, 10, 150, 100); // Is creating a rectangle starting at the 10px x-axis and 10px y-axis, and is 150px in width and 100px in height

// Draw Circle
ctx.arc(300, 300, 100, 0, Math.PI * 2); // Creating a circle starting at 300px x-axis, 300px y-axis and a 100 radius, 0 start angle, and to get a full circle Math.PI * 2
ctx.fillStyle = 'red'
// Fill color
ctx.fill(); // The circle will be red

// Draw Lines
// Begin the line somewhere
ctx.beginPath(); // By default starts at X = 0, Y = 0 This is also begining the line
// Move the beginning of the line to different area
ctx.moveTo(10, 10);
// Draw the actual line
ctx.lineTo(300, 300);
// Lines don't use a fill style they use a stroke style
ctx.strokeStyle = 'orange';
// Line width for thicker lines
ctx.lineWidth = 5;
// Draw the line on the page
ctx.stroke();

// Draw text
ctx.font = '30px Arial'; // Setting the size and style of font
// Set fillstyle
ctx.fillStyle = 'blue';
// Stroke Text
// Set the text content you want, the x and y value, and the max width of the text
ctx.fillText('Hello World', 200, 100, 300);

// Make Stroked text
ctx.font = '30px Arial';
ctx.fillStyle = 'blue';
// By default it will use the last line width that was set (one line 26)
// Set the line width
ctx.lineWidth = 1;
// Since it's stroked, fillstyle doesn't apply so use stroke style
ctx.strokeStyle = 'lightBlue';
ctx.strokeText('I am Stroked', 200, 130, 300);

// Working with images
// Draw Image
const image = document.querySelector('img');
// Move the image into the canvas
image.style.display = 'none';
// Before doing anything to the image you want to wait for it to fully load into the page
image.addEventListener('load', () => ctx.drawImage(image, 250, 250, 100, 100));