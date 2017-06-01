import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinarySearchTree from '../src/binarySearchTree'

chai.use(chaiChange)

describe('BinarySearchTree', () => {
'use strict'

  it('exists', () => {
    expect(BinarySearchTree).to.be.a('function')
  })

  it('should insert node with specified value into tree', () => {
    bst.insert('Video Camera')
    bst.insert('Lights')
    bst.insert('Tripod')
    bst.insert('Action')
    bst.count()

    expect(bst.count().to.equal(4))
  })

  it('should remove value node from tree', () => {
    bst.remove('Action')
    bst.search('Action')

    expect(bst.search('Action')).to.equal(null)
  })

})
