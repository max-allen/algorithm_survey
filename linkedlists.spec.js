const LinkedList = require('./linkedlists')

describe('LinkedList', () => {
  let linkedList

  beforeEach(() => {
    linkedList = new LinkedList()
  })
  
  it('should initially set the head and tail to null', () => {
    const linkedList = new LinkedList()
    expect(linkedList.head).toBe(null)
    expect(linkedList.tail).toBe(null)
  })

  it('has addToTail, addToHead, removeHead, removeTail, and search methods', () => {
    expect(typeof linkedList.addToTail).toBe('function')
    expect(typeof linkedList.addToHead).toBe('function')
    expect(typeof linkedList.removeHead).toBe('function')
    expect(typeof linkedList.search).toBe('function')
  })

  it('should set the first node added as both the head and tail', () => {
    linkedList.addToHead('ford')
    expect(linkedList.head).toBe(linkedList.tail)
  })

  it('should return the head if remove head is called', () => {
    linkedList.addToTail('ford')
    linkedList.addToTail('mazda')
    linkedList.addToTail('honda')

    expect(linkedList.removeHead()).toEqual('ford')
    expect(linkedList.removeHead()).toEqual('mazda')
    expect(linkedList.removeHead()).toEqual('honda')
  })

  it('should return the correct values for search', () => {
    linkedList.addToTail('ford')
    linkedList.addToTail('mazda')
    linkedList.addToTail('honda')

    expect(linkedList.search('ford')).toBe('ford')
    expect(linkedList.search('honda')).toBe('honda')
    expect(linkedList.search('audi')).toBe(null)
  })
})