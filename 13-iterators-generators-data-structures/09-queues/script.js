// Queues are a data structure that work on a first in, first out basis
/*
  Queue Class Methods:
  enqueue() - Add onto the queue
  dequeue() - Pop off of the queue (Remember the first one added is the first one removed)
  peek() - See whats in front of the queue
  isEmpty() - Check if queue is empty
  length() - Check length of queue
*/

class Queue {
  constructor() {
    this._items = [];
    this._count = 0;
    this._front = 0; // Represents the index of the data that's in the front of the queue
  }

  // Add on the the queue
  enqueue(item) {
    this._items[this._count] = item;
    this._count++;
    // Could also just do Array.push();
  }

  // Remove an item from the queue (Remember it removes the first item added on to the queue)
  dequeue() {
    if(this.isEmpty()) {
      return 'Undefined';
    }

    const item = this._items[this._front];
    for (let i = this._front; i < this._count - 1; i++) {
      this._items[i] = this._items[i + 1];
    }
    this._count--;
    this._items.length = this._count;
    return item;
    // Could also just do Array.shift()
  }

  peek() {
    if(this.isEmpty()) {
      return 'No items in Queue';
    }

    return this._items[this._front];
  }

  length() {
    return this._count - this._front;
  }

  // Check if empty
  isEmpty() {
    return this._count === 0;
  }

}

const q = new Queue();

q.enqueue('Item 1');
q.enqueue('Item 2');
q.enqueue('Item 3');

console.log('Front Item: ', q.peek()); // Item 1
console.log('Queue Length: ', q.length()); // 3

q.dequeue();
console.log('Front Item: ', q.peek()); // Item 2
console.log('Queue Length: ', q.length()); // 2
