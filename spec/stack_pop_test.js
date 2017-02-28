import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack_pop'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('pop()', () => {
    it('pops an element to the top of the stack.', () => {
      const myStack = new Stack()
      console.log(myStack)
      expect(() => myStack.pop('foo'))
        .to.alter(() => myStack.length(), { from: 1, to: 0 })
    })
  })
})
