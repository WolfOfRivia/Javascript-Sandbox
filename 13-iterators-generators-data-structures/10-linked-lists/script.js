/*
  Linked List Data Structure is different from a stack or queue
  It's a series of nodes that have a value and pointer to the next node
  They are seperate objects that contain a point to the next object in the list
  The beginning of a linked list is called the head, and the end is called the tail
  The last node in the list (or the tail) points to null as the next value
*/

/*
  Linked Lists Methods
  insertFirst() - Insert the first node
  insertLast() - Insert the last node
  insertAt() - Insert with an index wherever we want in the list
  getAt() - Get any node we want based on index
  removeAt() - Remove any node based on index
  printListData() - Print the values of the nodes
  clearList() - Clear all nodes
*/

/*
  In addition to a linked list class we will also create a node class that's an object that
  we instantiate from the node class to represent each node in the linked list
*/

// Creating Linked List with object literals (A cheap way of doing it)
const node1 = {
  value: 100
};

const node2 = {
  value: 200
}

// With a linked list node1 would point to node2 by having a property called next
node1.next = node2;

// console.log(node1, node2); // Logs node1 which shows it's value and the property of next which points to node2, node2 is also logged but doesn't point to anything

// Create Node3
const node3 = {
  value: 300
}

// Point node2 to node3
node2.next = node3;

// Node3 is also the tail so have it point to null
node3.next = null;
// console.log(node1, node2, node3); // Logs node1, 2, and 3, node2 points to node3, node3 being the tail of the linked list points to null

// Creating a linked list with a class and having methods do different tasks\

// We need a class of node because everything we create a node we want to instantiate a new node object
class Node {
  constructor(value) {
    this._value = value;
    this.next = null; // Set to null by default
  }
}

// Create Linked list
class LinkedList {
  constructor() {
    this._head = null; // Set to null by default if there are no nodes
    this._length = 0;
  }

  // Insert first node (Head)
  insertFirst(value) {
    const newNode = new Node(value);
    newNode.next = this._head;
    this._head = newNode;
    this._length++;
  }

  // Insert last node (Tail)
  insertLast(value) {
    const newNode = new Node(value);
    let current = this._head;
    while(current.next) {
      current = current.next;
    }

    current.next = newNode;
    this._length++;
  }

  // Insert at index (Anywhere)
  insertAt(value, index) {
    if(index > this._length) {
      return;
    }

    if(index === 0) {
      this.insertFirst(value);
      return;
    }

    const newNode = new Node(value);
    let current, previous;
    current = this._head;
    let count = 0;

    while(count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    newNode.next = current;
    previous.next = newNode;
    this._length++;
  }

  // Get at index (Get any node based on index)
  getAt(index) {
    let current = this._head;
    let count = 0;
    while(current) {
      if(count === index) {
        console.log(current._value);
      }
      count++;
      current = current.next;
    }
    return null;
  } 

  // Removed at index (Remove any node based on index)
  removeAt(index) {
    if(index > this._length) {
      return;
    }
    let current = this._head;
    let previous
    let count = 0;

    if(index === 0) {
      this._head = current.next
    } else {
      while(count < index) {
        count++;
        previous = current;
        current = current.next
      }
      previous.next = current.next;
    }
    this._length--;
  }

  // Print list data (Print all node values)
  printListData() {
    let current = this._head;
    let list = '';

    while(current) {
      list += current._value + ' ';
      current = current.next;
    }

    console.log(list);
  }

  // Clear list (Clear all nodes)
  clearListData() {
    this._head = null;
    this._length = 0;
  }
}

const list = new LinkedList();

list.insertFirst(100);
list.insertFirst(200);
list.insertFirst(300);
list.insertLast(50);
list.insertAt(500, 2);
list.insertAt(600, 4);
list.removeAt(2);
list.removeAt(0);
// console.log(list);
list.clearListData();
list.printListData();
list.getAt(2);
list.getAt(0);