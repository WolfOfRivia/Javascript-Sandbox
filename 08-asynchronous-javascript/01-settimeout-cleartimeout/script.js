// setTimeout(changeText, 2000); // Even at 0 seconds line 5 will still run first.

// console.log('Hello From Global Scope');

function changeText() {
  document.querySelector('h1').textContent = 'Hello From Callback';
}

// Clear Timeout
// In order to clear a timer you need the timer ID that setTimeout returns

const timerID = setTimeout(changeText, 3000); // Even though function is stored in a variable it is still being executed.

// Cancel function with cleartimeout

document.querySelector('#cancel').addEventListener('click', () => {
  console.log(timerID); // Take a look at the ID while we're at it. (returned 1)
  clearTimeout(timerID);
  console.log('Timer Cancelled');
})
