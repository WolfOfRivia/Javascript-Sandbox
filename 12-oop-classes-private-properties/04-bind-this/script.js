class App {
  constructor() {
    this.serverName = 'localhost';

    document
      .querySelector('button')
      .addEventListener('click', this.getServerName.bind(this));
  }

  getServerName() {
    console.log(this.serverName);
  }
}

const app = new App();

// app.getServerName(); // localhost

// There is a button in the html what we want to do is click that button and call getServerName() from the App class
// The way we do that is by adding the event listener inside the constructor and also use the bind() method on the callback function
// You only need to use bind() if the method called is using the this keyword, and when setting bind() on the callback, you have to 
// make sure to pass in the this keyword as an argument as demonstrated on line 7

// Definitely watch the video again to make sure you understand this. 
