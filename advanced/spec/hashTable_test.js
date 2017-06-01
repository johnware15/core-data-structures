import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hashTable'

chai.use(chaiChange)

describe('HashTable', () => {
'use strict'

it('exists', () => {
  expect(HashTable).to.be.a('function')
})

it('adds a key-value pair to the hash table.', () => {
  ht.put('David Fincher', 'Se7en')
  ht.put('Christopher Nolan', 'The Dark Knight')
  ht.put('Alex Garland', 'Ex Machina')

  expect(ht.size()).to.equal(3)
})

it('should change the value in the key-value pair.', () => {
  ht.put('David Fincher', 'Gone Girl')

  expect(ht.contains('David Fincher')).to.equal.(true)
  expect(ht.get('David Fincher')).to.equal('Gone Girl')
})

it('should return the data associated with the key.', () => {
  ht.get('Alex Garland')

  expect(ht.get('Alex Garland')).to.equal.('Ex Machina')
})

it('should remove a key-value pairs in hash table.', () => {
  ht.remove('Christopher Nolan')
  ht.contains('Christopher Nolan')
  
  expect(ht.contains('Christopher Nolan')).to.equal(false)
})

it('generates a hash for key ''David Fincher', () => {
  HashTable.hash('David Fincher')

  expect(HashTable.hash('David Fincher')).to.equal()
})

})
