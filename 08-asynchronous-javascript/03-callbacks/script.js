// A callback is a function that gets passed into another function, 
// functions used the function addEventListener() is an example

// function toggle(e) {
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'},
  {title: 'Post Three', body: 'This is post three'},
  {title: 'Post Four', body: 'This is post four'},
  {title: 'Post Five', body: 'This is post five'},
  {title: 'Post Six', body: 'This is post six'},
];

// We are gonna fetch these posts but mimic how it works fetching them from a server, so Brad chose to use a setTimeout
// Fetching from a real server actually takes some time

function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    })
  }, 1000);
}

createPost({title: 'Post Seven', body: 'Post Seven'}, getPosts);

// getPosts();
