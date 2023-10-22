const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
  fetch(apiURL + '?_limit=10') // by default the api gives 200 items, we are limiting it to 10
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => addTodoToDOM(todo));
    });
};

// At first this content was at line 7, however these lines will be resused later, it's better to place them in a function
function addTodoToDOM(todo) {
  const div = document.createElement('div');
  div.classList.add('todo');
  div.appendChild(document.createTextNode(todo.title));
  // Add todo id to the DOM for use later
  div.setAttribute('data-id', todo.id);
  // Add class if todo item is completed
  if(todo.completed) {
    div.classList.add('done');
  }
  document.getElementById('todo-list').appendChild(div);
};

// Create Todo
const createTodo = (e) => {
  e.preventDefault();
  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false
  }
  fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'content-type' : 'application/json'
    }
  })
  .then((res) => res.json())
  .then(data => addTodoToDOM(data));
};

const toggleCompleted = (e) => {
  if(e.target.classList.contains('todo')) {
    e.target.classList.toggle('done');
    updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
  }
};

const updateTodo = (id, completed) => {
  // console.log(id, completed);
  fetch(`${apiURL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({completed}), // destructuring, this is the only field being updated
    headers: {
      'content-type' : 'application/json'
    }
  })
  // .then((res) => res.json())
  // .then(data => console.log(data)); You don't really need these here upon update, these are there just incase you want to see what happened
}

const deleteTodo = (e) => {
  if(e.target.classList.contains('todo')) {
    const id = e.target.dataset.id;
    fetch(`${apiURL}/${id}`, {
      method: 'DELETE'
    })
    .then((res) => res.json())
    .then(() => e.target.remove()) // there is no data returned because the data was deleted from the server, but next we need to remove the element from the DOM, this does that
  }
}
/*
  - Some tips, this is a quick and dirty method of deleting, as we can see upon clicking it also calls the update, and then the double click finally deletes.
  - A better way of handling it is to have an x button for deleting functionality, perhaps we can update this in the future for that.
*/

const init = () => {
  document.addEventListener('DOMContentLoaded', getTodos);
  document.querySelector('#todo-form').addEventListener('submit', createTodo);
  document.querySelector('#todo-list').addEventListener('click', toggleCompleted);
  document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
};

init();