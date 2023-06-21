const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// console.log(socials.__proto__);

// This is running the function for every item in the array so it's calling console.log 4 times
// socials.forEach(function(el) {
//   console.log(el);
// })

// This works too
socials.forEach((el) => console.log(el));

// You can also pass in the index as well as the entire array as a parameter
socials.forEach((el, index, arr) => console.log(`${index} - ${el}`, arr));

// You also pass in named functions
function logSocials(item) {
  console.log(item);
}

// socials.forEach(el => logSocials(el));

// This works too
socials.forEach(logSocials);

// With objects (Normally foreach is used on an array of objects)
const socialObjs = [
  {name: 'Twitter', url: 'https://twitter.com'},
  {name: 'Facebook', url: 'https://facebook.com'},
  {name: 'LinkedIn', url: 'https://linkedin.com'},
  {name: 'Instagram', url: 'https://instagram.com'}
];

// Logs each object
socialObjs.forEach((item) => console.log(item));

// Logs the url in each object
socialObjs.forEach((item) => console.log(item.url));
