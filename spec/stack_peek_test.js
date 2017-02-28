import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack_peek'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('peek()', () => {
    it('peeks an element from the top of the stack.', () => {
      const myStack = new Stack()
      //console.log(myStack)
      myStack.push("puppydogs")
      console.log(myStack.peek())
      expect(myStack.peek())
        .to.be.a('string');
    })
  })
})
