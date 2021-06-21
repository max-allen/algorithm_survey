const LinkedList = require('./linkedlists')

/*
  Supports first in, last out retrieval. Appropriate where order is important.
  put and get operations are called enqueue and dequeue.
*/


/*
// implemented as an array
class Queue {
  constructor() {
    this.data = []
    this.head = this.tail = 0
  }

  enqueue(item) {
    this.data[this.tail++] = item
  }

  dequeue() {
    const node = this.data[this.head++]
    return node
  }
}
*/

// implemented as linked list
class Queue {
  constructor() {
    this.data = new LinkedList()
  }

  enqueue(item) {
    this.data.addToTail(item)
  }

  dequeue() {
    return this.data.removeHead()
  }
}


module.exports = Queue
