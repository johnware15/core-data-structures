import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack_length'

chai.use(chaiChange)

describe('Stack', () => {
'use strict'

it('exists', () => {
expect(Stack).to.be.a('function')
})
