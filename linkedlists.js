const Node = require('./Node')

class LinkedList {
  constructor() {
    this.head = this.tail = null
  }

  addToHead(el) {
    const node = new Node(el, null, this.head)
    if (this.head) this.head.previous = node
    else this.tail = node
    this.head = node
  }

  addToTail(el) {
    const node = new Node(el, this.tail)
    if (this.tail) this.tail.next = node
    else this.head = node
    this.tail = node
  }

  removeHead() {
    if (!this.head) return
    const node = this.head
    this.head = this.head.next
    if (this.head) this.head.previous = null
    else this.head = null
    return node.data
  }

  removeTail() {
    if (!this.tail) return
    const node = this.tail
    this.tail = this.tail.previous
    if (this.tail) this.tail.next = null
    else this.tail = null
    return node.data
  }

  search(term) {
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.data === term) return currentNode.data
      currentNode = currentNode.next
    }
    return null
  }
}

module.exports = LinkedList