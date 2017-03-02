 import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import set from '../src/set.js'

chai.use(chaiChange)

describe('set', () => {
  'use strict'

  it('exists', () => {
    expect(Set).to.be.a('function')
  })
})
  context('add()', () => {
    it('adds an element', () => {
      const set = new Set()
      //console.log(myStack)
      set.add("red" )
      
      expect(set.add(["red"]))
        .to.not.be.null;
    })
    })

     
    
  

