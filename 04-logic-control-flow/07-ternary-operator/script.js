const age = 19;

// using an if statement
// if(age >= 18) {
//   console.log('You can vote');
// } else {
//   console.log('You cannot vote');
// }

// Using a ternary operator
age >= 18 ? console.log('You can vote') : console.log('You cannot vote');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
// You can also have a string
const canVote2 = age >= 18 ? 'You can vote' : 'You cannot vote';

console.log(canVote);
console.log(canVote2);

// Multiple Statements
const auth = true;
// let redirect;

// if(auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }

// Same with ternary operator
// const redirect = auth ? (alert('Welcome to the Dashboard'), '/dashboard') : (alert('Access Denied', '/login'));

// console.log(redirect);

// If there is no else statement
auth ? console.log('Welcome to the Dashboard') : null;

// If you don't want to use null
auth && console.log('Welcome to the Dashboard'); // Brad stated he uses this alot with React with JSX