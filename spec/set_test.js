 import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import set from '../src/set.js'

chai.use(chaiChange)

describe('set', () => {
  'use strict'

  it('exists', () => {
    expect(Set).to.be.a('function')
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
  //need to find out why this is saying that set.isEmpty is not a function
  context('isEmpty()',() => {
  	 it("checks to see fi its empty or not", () =>{
  	 	const set = new Set()
  	
  	 	expect(set.isEmpty())
  	 	.to.be.true;
  	 })
  	})
   //    const set = new Set()
   //    //console.log(myStack)
   //    set.add("red" )
  	// it('checks to see if there is anything in the set',()=>{
  	// 	const set = new Set()
  	// 	set.isEmpty()
  	// 	expect(set.isEmpty().to.be.true);
  
 });
     
    
  

