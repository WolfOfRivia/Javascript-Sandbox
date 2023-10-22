// Creating a post and using the POST method to send to a server
// function createPost(post) {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     'method': 'POST',
//     'body' : JSON.stringify({
//       title: post.title,
//       body: post.body,
//       // id: 1, not necessary to create an ID as the server does it for you, however I'm putting this here just because reasons..
//     })
//   })
// }

// The function above can be simplified a bit with destructuring.
function createPost({title, body}) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    'method': 'POST',
    'body' : JSON.stringify({
      title,
      body
      // id: 1, not necessary to create an ID as the server does it for you, however I'm putting this here just because reasons..
    }),
    headers: {
      'content-type' : 'application/json',
      token: 'abc123'
    }
  })
  .then(res => res.json())
  .then(data => console.log(data)); // In most cases what we get back is the data of the newly created item (a blog post in this case), and the id the server creates
}

/* 
  Rewatch the video above but brad mentioned since we are sending JSON data our content type would be application/json
  however we can essentially put anything we want there.
  he did this too:
  headers: {
    hello : 'world'
  }

  and also he mentioned often a token of authentication with the api would be placed here, and you can store the token in localstorage or whatever you want to do with it.
  headers: {
    'content-type' : 'application/json',
    token : 'a23das92419dsd'
  }
*/

createPost({title: 'Post One', body: 'This is my post'}); // logs the newly created post that was sent back to us from the server along with the id the server created