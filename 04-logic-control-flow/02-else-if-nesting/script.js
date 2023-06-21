// You might have multiple conditions you want to test
const d = new Date(10, 30, 2022, 6, 0, 0);

const hour = d.getHours();

// console.log(hour);

if(hour < 12) {
  console.log('Good Morning');
} else {
  console.log('Good Night');
}

// But would if you had an afternoon?
if(hour < 12) {
  console.log('Good Morning');
} else if(hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
}

// Currently we get Good Morning because it always looks at the first condition first, which is true so it logged it

// Nested If
if(hour < 12) {
  if(hour === 6) {
    console.log('Wake Up');
  }
  console.log('Good Morning');
} else if(hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
  if (hour >= 20) {
    console.log('zzzzzz');
  }
}

// We can have multiple conditions in an if statement

// This is the and operator
if(hour >= 7 && hour < 15 ) {
  console.log('It is work time');
}

// This is the or operator
if(hour === 6 || hour === 20 ) {
  console.log('Brush Your Teeth');
}