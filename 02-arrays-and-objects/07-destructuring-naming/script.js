// Destructuring

const todo = {
  id: 1,
  title: 'Take out Trash'
}

// This is one way of pulling data from an object
// const id = todo.id;
// Returns 1
// console.log(id);

// Another way is pulling everything we want in curly braces and setting the variable to the object
const { id, title } = todo;
// Returns 1 'Take out Trash'
console.log(id, title);