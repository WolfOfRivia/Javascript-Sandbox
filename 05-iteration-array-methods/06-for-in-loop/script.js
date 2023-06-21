// Maybe you want to loop through an objects value, you can do it with this loop
const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'orange',
  color4: 'green',
};

// This logs the keys in the color object
for (const key in colorObj) {
  console.log(key);
}

// This logs the key and the value of the color object
for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

// Use with an array
const colorArr = ['red', 'green', 'blue', 'yellow'];

for (const color in colorArr) {
  console.log(color); // Logs 0 1 2 3 because it's giving the numeric key in the array
}

// To get the values of the array
for (const key in colorArr) {
  console.log(colorArr[key]);
}

// This loop method is most commonly used if you want to get the keys and values of an object literal