// Generators can be used to generate iterators, they are functions that can be paused and resumed

// Creating a generator use the function keyword and add an asterisk
function* createTeamIterator(teams) {
  for(let i = 0; i < teams.length; i++) {
    yield teams[i];
  }
}

const teams = ['Mets', 'Phillies', 'Nationals', 'Braves', 'Marlins'];

const iterator = createTeamIterator(teams);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// They it is also iterable
for (const team of createTeamIterator(teams)) {
  console.log(team);
}

// Using the spread operator
console.log([...createTeamIterator(teams)]);

// Destructuring
const [first, second, third] = createTeamIterator(teams);

console.log(first, second, third);