// We are gonna get more into encapsulation which often includes hiding specific properties, methods and data of a class
// Many languages have keywords you can use to make data private and not able to accessed outside the class
// Javascript doesn't have keywords, but it does have a convention recognized by most devs and it's underscore

class Wallet {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }

  deposit(amount) {
    this._processDeposit(amount);
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log('Not enough funds');
      return;
    }
    this._processWithdraw(amount);
    this._balance -= amount;
  }

  // We used an underscore so that means this method is supposed to be private
  _processDeposit(amount) {
    console.log(`Depositing ${amount}`);
    this._transactions.push({
      type: 'Deposit',
      amount // Still sets amount: amount
    })
  }

  _processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`);
    this._transactions.push({
      type: 'Withdraw',
      amount
    })
  }

  // create getter methods
  get balance() {
    return this._balance;
  }

  get transactions() {
    return this._transactions;
  }

}

const wallet = new Wallet();

wallet.deposit(300);
wallet.withdraw(50);
/*
  Works like expected but we don't want to expose the balance property to the outside world we want it private
  We want it to where the only way to access the balance property is through the deposit or withdraw methods this is part of encapsulation
  Again since Javascript doesn't have a keyword to make a property private, we will just use the underscore to indicate that the property
  is supposed to be private. Remember the underscore doesn't actually prevent people from accessing the property, it's just an indicator
  and lets the developer know that that property shouldn't be accessed and should be private.
*/

console.log(wallet.balance);
console.log(wallet.transactions);

