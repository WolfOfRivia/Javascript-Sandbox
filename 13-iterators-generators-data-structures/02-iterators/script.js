// Iterators are objects that define a sequence and potentially a return value upon completion. 

const app = {
  nextIndex: 0,
  teams: ['Mariners', 'Rangers', 'Athetics', 'Angels', 'Astros'],
  next() {
    if (this.nextIndex >= this.teams.length) {
      return { done: true}
    }

    const returnValue = {value: this.teams[this.nextIndex], done: false}
    this.nextIndex++;
    return returnValue;
  }
}

console.log(app.next()); // {value: 'Mariners', done: false}
console.log(app.next()); // {value: 'Rangers', done: false}
console.log(app.next()); // {value: 'Athletics', done: false}
console.log(app.next()); // {value: 'Angels', done: false}
console.log(app.next()); // {value: 'Astros', done: false}
console.log(app.next()); // {done: true}

// Try looping through instead of running next repeatedly
// for (const team of app) {
//   console.log(team);
// }

// Returns an error 'app is not iterable'

// Using Symbol.iterator;

const app2 = {
  teams: ['Giants', 'Dodgers', 'Padres', 'Diamondbacks', 'Rockies'],
  [Symbol.iterator] : function() {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.teams.length 
          ? { value: this.teams[nextIndex++], done: false }
          : {done: true} 
      }
    }
  }
}

const iterator = app2[Symbol.iterator]();
console.log(iterator.next()); // {value: Giants, done: false}
console.log(iterator.next().value); // If you just want the value returns Dodgers
console.log(iterator.next()); // {value: Padres, done: false}
console.log(iterator.next()); // {value: Diamondbacks, done: false}
console.log(iterator.next()); // {value: Rockies, done: false}
console.log(iterator.next()); // {done: true}

// Also the for of loop should work now since app2 is iterable
for (const team of app2) {
  console.log(team); // Returns each team value, (doesn't return done: true / false this time)
}

// There's a difference between an iterator and an iterable, just watch more videos on explaination.

// This is advanced Javascript though used for more niche situations.