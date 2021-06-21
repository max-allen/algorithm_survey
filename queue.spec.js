const Queue = require('./queues')

describe('Queue', () => {
  it('adds and removes items FIFO', () => {
    const queue = new Queue()
    queue.enqueue('ford')
    queue.enqueue('mazda')
    queue.enqueue('honda')

    expect(queue.dequeue()).toEqual('ford')
    expect(queue.dequeue()).toEqual('mazda')
    expect(queue.dequeue()).toEqual('honda')
  })
})