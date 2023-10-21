const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if(!error) {
      resolve({name: 'John', age: 30});
    } else {
      reject('Error: Something went wrong.');
    }
  },  1000);

});

promise
  .then((user) => {
    console.log(user); // John object
    return user.name;
  })
  .then((name) => {
    console.log(name); // John
    return name.length;
  })
  .then((nameLength) => {
    console.log(nameLength); // 4
  })
  .catch((err) => {
    console.log(err);
    return 123;
  }) // This catch only worries about the lines before it, everything after still runs
  .then((x) => {
    console.log('This will run no matter what', x);
  })