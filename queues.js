const LinkedList = require('./linkedlists')

/*
  Supports first in, last out retrieval. Appropriate where order is important.
  put and get operations are called enqueue and dequeue.

  as linked list:
  - overflow cannot occur with linked lists unless memory is full
  - simpler insertion and deletion
  - moving pointers is easier and faster than moving items themselves

  as array:
  - linked structures require space for stroing pointers.
  - random access to items is not efficient (must navigate to / from head or tail)
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
