/* Objective
  - Create a constructor to create a Player object with a name
  - Player should have a name as well as a level set to 1 by default and points set to 0 by default
  - Create a method on the prototype called gainXp that takes in a number from 1-10 and
    adds it to the players points. If the current points are >= 10 then add 1 to the level and decrement
    the points by 10.
  - Create another prototype method called describe that displays the players stats (name, lvl, points)

  You should be able to use the player object like this:
  let player1 = new Player('Bob');
  let player2 = new Player('Alice');

  player1.gainXp(5);
  player2.gainXp(7);
  player1.gainXp(3);
  player2.gainXp(2);
  player1.gainXp(8);
  player2.gainXp(4);

  console.log(player1.describe()) // Bob is level 2 with 6 experience points.
  console.log(player2.describe()) // Alice is level 2 with 3 experience points.
*/

// So ME personally I ended up adding a button to the html so I can just roll and add exp to player1 on player1's turn
// Then roll and add exp to Player2 on Player2's turn

function Player(name) {
  this.name = name,
  this.level = 1,
  this.points = 0
}

Player.prototype.gainXp = function(exp) {
  this.points = this.points + exp;
  if(this.points >= 10) {
    this.level++;
    this.points = 0;
  }
}

Player.prototype.describe = function() {
  console.log(`${this.name} is level ${this.level} with ${this.points} experience points.`);
}

let player1 = new Player('Bob');
let player2 = new Player('Alice');

// Player One's turn by default
let turn = 1;
// Initialize exp
let exp;

function roll() {
  if(turn === 2) {
    // Player2's turn
    // Get random number between 1 and 10
    exp = Math.floor((Math.random() * 10) + 1);
    // Add Exp points and level up is cap is reached
    player2.gainXp(exp);
    // console.log(exp);
    // console.log(1);
    // Show player status
    player2.describe();
    turn = 1;
  } else {
    // Player1's turn, following the same methods as player2
    exp = Math.floor((Math.random() * 10) + 1);
    // console.log(exp);
    // console.log(2);
    player1.gainXp(exp);
    player1.describe();
    turn = 2;
  }
}

// Roll turn
document.getElementById('roll').addEventListener('click', roll);

// Brad's Code Below
// function Player(name) {
//   this.name = name,
//   this.lvl = 1,
//   this.points = 0
// }

// Player.prototype.gainXp = function(xp) {
//   this.points += xp;
//   if(this.points >= 10) {
//     this.level++;
//     this.points -= 10;
//   }
//   // This is called abstraction I did the same above however in a game format
//   console.log(this.describe());
// }

// Player.prototype.describe = function() {
//   return `${this.name} is level ${this.lvl} with ${this.points} experience points.`;
// }

// let player1 = new Player('Bob');
// let player2 = new Player('Alice');

// player1.gainXp(4);
// player2.gainXp(7);
// player1.gainXp(5);
// player2.gainXp(1);
// player1.gainXp(7);
// player2.gainXp(9);
// player1.gainXp(5);
// player2.gainXp(2);

// // console.log(player1.describe());
// // console.log(player2.describe());