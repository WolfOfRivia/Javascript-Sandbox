// Switches are good for situations where you have a LONG list of conditions to check
const d = new Date(2022, 4, 10, 8, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

console.log(month);

// Lets name our months
switch (month) {
  case 1:
    console.log('It is January');
    break; // This keyword is just breaking the code out of this case and moving to the next
  case 2:
    console.log('It is February');
    break;
  case 3:
    console.log('It is March');
    break;
  default:
    console.log('It is not Jan, Feb or March');
}

// You can use it with ranges of time or numbers too
switch (true) {
  case hour < 12:
    console.log('Good Morning');
    break;
  case hour < 18:
    console.log('Good Afternoon');
    break;
  default:
    console.log('Good Evening');
}

// Switch statements aren't as common but again useful for a long list of conditions