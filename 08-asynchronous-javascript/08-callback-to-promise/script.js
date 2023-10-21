// This is old code from 03-callbacks that was refactored into using promises
const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'},
  {title: 'Post Three', body: 'This is post three'},
  {title: 'Post Four', body: 'This is post four'},
  {title: 'Post Five', body: 'This is post five'},
  {title: 'Post Six', body: 'This is post six'},
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if(!error) {
        posts.push(post);
        resolve();
      } else {
        reject('Something went wrong');
      }
    }, 2000);
  })
}

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement('div');
      div.innerHTML = `<li><strong>${post.title}</strong> - ${post.body}</li>`;
      document.querySelector('#posts').appendChild(div);
    })
  }, 1000);
}

function showError(err) {
  const h3 = document.createElement('h3');
  h3.innerHTML = `<strong>${err}</strong>`;
  document.getElementById('posts').appendChild(h3);
}

createPost({title: 'Post Seven', body: 'Post Seven'}).then(getPosts).catch(showError);