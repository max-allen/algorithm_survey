const Node = require('./Node')

/*
  Along with queues make up containers, which permit storage and retrieval independent of context.
  Retrieval order is last in first out (LIFO). Good choice when order doesnt matter.
  Tends to happen during execution of recursive algorithms.
*/ 

class Stack {
  #top

  constructor() {
    this.#top = null 
  }

  push(item) {
    const node = new Node(item)
    node.previous = this.#top
    this.#top = node
  }

  pop() {
    const node = this.#top
    this.#top = node.previous
    return node.data
  }

  peek() {
    return this.#top
  }
}

module.exports = Stack
