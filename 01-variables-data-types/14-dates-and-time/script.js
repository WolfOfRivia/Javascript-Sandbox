let d = new Date();

console.log(d);

// You can get the typeof (which is an object)
// you can also turn the date into a string with d.toString()

// You can set a date
let d1 = new Date(2021, 6, 29);
// Returns Thursday July 29th
// 6 is returing as July because months are 0 based
console.log(d1)

// You can also do time
let d2 = new Date(2021, 0, 2, 14, 34, 0);
// Returns Saturday Jan 2nd 2021 14:34:00
console.log(d2);

// You can also add a string instead of a bunch of arguments
let d3 = new Date('2021-5-1');
// Returns Saturday May 1st 2021
// Also in this case May was not 0 based
console.log(d3);

// Timestamps
let d4 = Date.now();
// Returns the number of milliseconds counted since Jan 1st 1970
console.log(d4);

// Get timestamp of specific date
let d5 = new Date('07-10-2022 12:30:00');
// d5 = d5.getTime();
d5 = d5.valueOf(); // Works the exact same way as getTime()

// Number of milliseconds of that date and time since Jan 1st 1970
console.log(d5);

// Create Date objects from a timestamp
let d6 = new Date(1683591388596);

// The day I was writing all this
console.log(d6);

// Convert timestap to seconds from milliseconds
let d7 = Math.floor(Date.now() / 1000);

// Returns timestamp in seconds
console.log(d7);