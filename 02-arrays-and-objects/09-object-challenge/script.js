// Step 1 create an array of object called library
const library = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: 'Huckleberry Finn',
    author: 'Mark Twain',
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: '10 Pillars of Wealth',
    author: 'Alex Becker',
    status: {
      own: true,
      reading: false,
      read: false
    }
  }
]

// console.log(library);

// Step 2 Set all read status to true

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// for (i = 0; i < library.length; i++) {
//   library[i].status.read = true;
// }

// let i = 0;
// while(i < library.length) {
//   library[i].status.read = true;
//   i++;
// }

// Step 3 Destructure title from the first book and rename it firstBook
// I failed this section because tbh that segment confused the hell out of me

const {title: firstBook} = library[0];

console.log(library);

// Turn Library into a JSON string
const libJSON = JSON.stringify(library);

console.log(libJSON);