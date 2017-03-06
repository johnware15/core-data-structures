import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
'use strict'

// it('exists', () => {
// expect(Stack).to.be.a('function')
// })

context('enqueue()', () => {
  it('adds an element to the back of the queue.', () => {
    const myQueue = new Queue()
    //console.log(myStack)
    myQueue.enqueue("foo")
    console.log(myQueue.enqueue())
    expect(myQueue.enqueue())
      .to.be.a('node');
  })
})







})
