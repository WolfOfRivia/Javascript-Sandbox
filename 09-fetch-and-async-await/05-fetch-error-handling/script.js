// httpstat.us is a site that allows us to playaround and test different status codes, you can use this to test how you would handle errors

// testing a success code '200'
// fetch('http://httpstat.us/200')
//   .then((res) => {
//     return res;
//   })
//   .then(() => console.log('success'));

// CAVEAT!!
// With 404 Being an error code you would think your catch function would run instead but here it doesn't
// The console will give you the 404 error code but ALSO log success and ignore the catch function
// This is because the fetch API doesn't work this way (Research it more)
// Look into Axios though as it does do what we want to accomplish and run the error function
// In order to get our error to run with the fetch api we need to manually check the error code
// fetch('http://httpstat.us/404')
//   .then((res) => {
//     console.log
//     return res;
//   })
//   .then(() => { 
//     console.log('success');
//   })
//   .catch((error) => {
//     console.log(error);
//   })

// How to manually check for error code
// fetch('http://httpstat.us/404')
//   .then((res) => {
//     // You can check res.status, res.ok, or res.statusText
//     if(!res.ok) {
//       throw new Error('Request Failed'); // This will Run
//     }
//     return res;
//   })
//   .then(() => { 
//     console.log('success'); // This will NOT run
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log('Catch function is running.'); // This will run
//   })

// Checking again but this time checking the actual status
// fetch('http://httpstat.us/404')
//   .then((res) => {
//     if(res.status === 404) {
//       throw new Error('Customized Not Found Message'); // This will Run
//     } else if(res.status === 500) {
//       throw new Error('Customized Server Error Message');
//     } else if (Response.status !== 200) {
//       throw new Error('Not Found');
//     }
//     return res;
//   })
//   .then(() => { 
//     console.log('success'); // This will NOT run
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log('Catch function is running.'); // This will run
//   })

  fetch('http://httpstat.us/500')
  .then((res) => {
    if(res.status === 404) {
      throw new Error('Customized Not Found Message'); 
    } else if(res.status === 500) {
      throw new Error('Customized Server Error Message'); // This will run
    } else if (Response.status !== 200) {
      throw new Error('Request Failed');
    }
    return res;
  })
  .then(() => { 
    console.log('success'); // This will NOT run
  })
  .catch((error) => {
    console.log(error);
    console.log('Catch function is running.'); // This will run
  })

// The catch function WILL work however with a network error
// fetch('http://hello123.net')
//   .then((res) => {
//     console.log
//     return res;
//   })
//   .then(() => { 
//     console.log('success'); // This will NOT run
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log('Catch function is running.'); // This will run
//   })