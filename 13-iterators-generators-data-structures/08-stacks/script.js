// Stacks are a data structure that work on a last in, first out basis

class Stack {
  constructor() {
    this._items = [];
    this._count = 0;
  }

  // Will let us add to the stack
  push(item) {
    this._items[this._count] = item;
    this._count++;
    // Note: you could also just use the Array.push() method and make this easier, but this is how you can make a push method **Plus it's good to know =)**
  }

  // Will let us remove from the top of the stack
  pop() {
    if (this.isEmpty()) {
      return 'Underflow';
    }

    const item = this._items[this._count - 1];
    this._count--;

    for(let i = this._count; i < this._items.length; i++) {
      this._items[i] = this._items[i + 1];
    }

    this._items.length = this._count;
    return item;
    // Note: you could also just use the Array.pop() method and make this easier, but again **it's good to know =)**
  }

  // Will let us see what's on top of the stack
  peek() {
    if(this.isEmpty()) {
      return 'No items in stack';
    }

    return this._items[this._count - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this._count === 0; // Will be true or false
  }

  // Get length of stack
  length() {
    return this._count;
  }

  // Clear the stack
  clear() {
    this._items = [];
    this._count = 0;
  }

}

const stack = new Stack();

stack.push('Item 1');
stack.push('Item 2');
stack.push('Item 3');

stack.pop();

stack.push('Item 4');
stack.push('Item 5');

console.log(stack);
console.log('Stack Length: ', stack.length());
stack.clear();
console.log(stack);
console.log('Stack Length: ', stack.length());

console.log('Top Item: ', stack.peek());