// document.querySelector('h1').textContent = 'Hello World'; 
// Should have gave me an error but it didn't for some reason.. (Edit: It's because the defer attibute was in the script tag)

// So now lets resume the lesson
// Window onload 
// window.onload = function() {
//   document.querySelector('h1').textContent = 'Hello World'; 
// }

// add event listener
// window.addEventListener('load', () => {
//   document.querySelector('h1').textContent = 'Hello World'; 
// })

// DOM Content Loaded
// window.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('h1').textContent = 'Hello World'; 
// })

// Difference 'load' waits for all content on page to load 'DOMcontentLoaded' loads as soon as the document is parsed

window.addEventListener('load', () => console.log('Page Loaded'));

window.addEventListener('DOMContentLoaded', () => console.log('DOMLoaded'));

console.log('Run Me'); // This will run before lines 22 and 24

// Resize event
window.addEventListener('resize', () => {
  document.querySelector('h1').textContent = `Resized to ${window.innerWidth} x ${window.innerHeight}`; 
})

// scroll event
window.addEventListener('scroll', () => {
  console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);
  if(window.scrollY > 70) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
})

// focus
window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach(p => {
    p.style.color = 'blue';
  })
})

// blur
window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach(p => {
    p.style.color = 'black';
  })
})