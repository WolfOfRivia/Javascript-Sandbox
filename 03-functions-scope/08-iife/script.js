// IIFE Allows you to create a function and immediately call it, there are some good reasons why you would do this

// One is to avoid global scope pollution refer to the other script
// We will get an error because the global variable of user has already been declared in the other script we included
// const user = 'john';

// An IIFE is one way to get around this
(function () {
  const user = 'John';
  console.log(user);
  // You can even do a function within the IIFE
  // But remember this function is scoped within this IIFE
  const hello = () => console.log('Hello from the IIFF');
  hello();
})();
// Now we won't get an error

// Adding parameters
(function (name) {
  console.log('Hello ' + name);
})('Sean');

// You can also name the function, the other two above were unnamed (also called anonymous functions)
(function hello() {
  console.log('Hello');
   // NOT Recommenend this will cause an infinite loop 
  // hello();
})();

// This isn't seen too often because you can't just call hello() as it already calls itself and does it only once.