// Update: Up until 2022 there was to no way to make a property private in Javascript but now theres a feature called class fields
// Instead of using an underscore you use a number sign (pound sign) you also don't have to put them in the constructor
// You can add them right in the class itself

class Wallet {
  #balance = 0;
  #transactions = [];

  deposit(amount) {
    this.#processDeposit(amount);
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('Not enough funds');
      return;
    }
    this.#processWithdraw(amount);
    this.#balance -= amount;
  }

  // We used an underscore so that means this method is supposed to be private
  #processDeposit(amount) {
    console.log(`Depositing ${amount}`);
    this.#transactions.push({
      type: 'Deposit',
      amount // Still sets amount: amount
    })
  }

  #processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`);
    this.#transactions.push({
      type: 'Withdraw',
      amount
    })
  }

  // create getter methods
  get balance() {
    return this.#balance;
  }

  get transactions() {
    return this.#transactions;
  }

  // So now we have private methods and public methods(deposit, withdraw and the two getters)

}

const wallet = new Wallet();
// console.log(wallet.#balance); // You see VS code reacting to it with the underline, but also your console will say private field and not allow access
// Private field '#balance' must be declared in an enclosing class
// So it's only usable inside the class
console.log(wallet.balance); // If you comment out your getters you'll get undefined
wallet.deposit(500);
wallet.withdraw(100);
// wallet.#processWithdraw(200); // VS Code reacts, and you get the same private error message that's on line 55

// This process is very new so for now you probably won't see it much, but I will be used more in the future