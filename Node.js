class Node {
  constructor(data, prev, next) {
    this.data = data
    this.previous = prev || null
    this.next = next || null
  }
}

module.exports = Node