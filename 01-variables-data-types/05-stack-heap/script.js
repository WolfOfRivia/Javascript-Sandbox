// Reference this video a few times to better understand it
// https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/37191180#overview

// These values are stored on the stack
const name = 'John';
const age = 30;

// Reference values are stored on the heap
const person = {
  name: 'Joe',
  age: 40
}
// returns John
console.log(name);

// ignore the slash this is a deprecated naming convention on the window object, but doesn't effect what we are doing in this lesson
let newName = name;
newName = 'Johnathan';
let newPerson = person;
// Returns the object of Joe with name : Joe and age: 40
console.log(person, newPerson);

// updating Joe to Johnny
newPerson.name = 'Johnny';

// Returns John and Johnathan
console.log(name, newName); 

// Returns the object of Johnny with name : Johnny and age: 40
console.log(person, newPerson);