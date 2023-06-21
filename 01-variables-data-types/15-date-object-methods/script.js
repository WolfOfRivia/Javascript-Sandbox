let d = new Date();

x = d.toString(); 
// String of date
console.log(x);

x2 = d.getTime(); 
// Timestamp of date
console.log(x2);

x3 = d.valueOf(); 
// Timestamp of date
console.log(x3);

x4 = d.getFullYear();
// Returns 2023 however if we added an argument to the new Date() like example d = new Date('03-24-2019') then getFullYear would return 2019
console.log(x4)

x5 = d.getMonth();
// Returns current month in zero based so 0 = January
console.log(x5);

x6 = d.getDate();
// Returns current day of the month
console.log(x6);

x7 = d.getDay();
// Returns current day of the week (It won't actually use the day Like Monday or Tuesday, it will return a number 0 - 6)
console.log(x7);

x8 = d.getHours();
// Returns the current hour of the day (in 24 hour format)
console.log(x8)

x9 = d.getMinutes();
// Returns the current minute of the hour
console.log(x9);

x10 = d.getSeconds();
// Returns the current second of the minute
console.log(x10);

x11 = d.getMilliseconds();
// Returns the current millisecond of the second
console.log(x11);

// You can construct a date from these methods
x12 = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
// Returns the current date in Y-M-D Format or however you constructed it
console.log(x12);

// An API you can use to handle different date formats based off location

// This is formatting the date for US Standards
x13 = Intl.DateTimeFormat('en-US').format(d);
// Returns current date in M/D/Y
console.log(x13);

// Formatting for UK Standards
x14 = Intl.DateTimeFormat('en-GB').format(d);
// Returns current date in D/M/Y
console.log(x14);

// Formatting for Japan Standards
x15 = Intl.DateTimeFormat('jp-JP').format(d);
// Returns current date in M/D/Y
console.log(x15);

// For default Locale
x16 = Intl.DateTimeFormat('default').format(d);
// Returns current date based off where your location is, I'm in the US so it will use US standards
console.log(x16);

// If you wanted to just get the month
x17 = Intl.DateTimeFormat('default', {month: 'long'}).format(d);
// Returns current month in it's long format
console.log(x17);

// You can also do this instead of calling the Intl.DateTimeFormat
x18 = d.toLocaleString('default', {month: 'short'});
// Returns the month in Short or Abbreviated format
console.log(x18);

// More Details you can get whatever you want out of this object
// This is a newer way of doing things and much easier to get and format what you want
x19 = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/Chicago',
});

console.log(x19);

