/*
  Supports first in, last out retrieval. Appropriate where order is important.
  put and get operations are called enqueue and dequeue.
*/

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

module.exports = Queue
