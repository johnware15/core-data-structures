import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack_isEmpty'

chai.use(chaiChange)

describe('Stack', () => {
'use strict'

it('exists', () => {
expect(Stack).to.be.a('function')
})


// context('size()', () => {
// it('pushes an element to the top of the stack.', () => {
// const myStack = new Stack()
// console.log(myStack)
// expect(() => (Stack.isEmpty)
// .to.be(true)
// )}
// )}
// )
})
