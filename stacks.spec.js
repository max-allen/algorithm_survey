const Stack = require('./stacks')

describe('Stack', () => {
  it('should push items onto a stack and return them by recency', () => {
    const stack = new Stack()
    stack.push('1')
    stack.push('10')
    stack.push('5')

    stack.pop()
    stack.pop()
    const item = stack.pop()

    expect(item).toEqual('1')
  })
})