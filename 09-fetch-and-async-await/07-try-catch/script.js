// console.log(x); // This will log and error "uncaught" in the console

// With the try catch syntax it will run but we will no longer get the "uncaught" error
// And it will log the error along with the append 'Error: ' I added
try {
  console.log(x);
} catch(error) {
  console.log('Error: ' + error);
}

// Brad doesn't suggest filling all your code with try catch errors you won't need
// Only when dealing with code blocks that may result in an error and you plan on handling that error in some way.
// An example is an api request, if you think it may result in an error you can handle the error message 
// and maybe display it on the page like 'Post or User is not found' message or whatever
// The more you code the more you'll figure out when and where it's appropriate to use this syntax

// We can also create our own error referrence messages the line that's logged on line 8 actually came from the error that logs on line 6
function double(number) {
  if (isNaN(number)) {
    throw new Error(number + ' is not a number');
  }
  return number * 2;
}

// Will log 2
try {
  const y = double(1);
  console.log(y);
} catch (error) {
  console.log(error);
}

// Will log Hello is not a number
// This code block triggered line 20 of the double function
// So now it will run the catch block
try {
  const y = double('Hello');
  console.log(y);
} catch (error) {
  console.log(error); //
}