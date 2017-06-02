import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hashTable'

chai.use(chaiChange)

describe.only('HashTable', function() {
'use strict'
let ht

// beforeEach( function() {
//    ht = new HashTable()
//   //  ht.insert( someData )
//
//  })

 it('exists', function() {
   expect(HashTable).to.be.a('function')
 })

   describe(  '#put', function() {
      context( 'when given the parameter \'David Fincher\', ', function() {
        const ht = new HashTable()
        ht.put('David Fincher', 'Se7en')
        ht.put('Christopher Nolan', 'The Dark Knight')
        ht.put('Alex Garland', 'Ex Machina')

        it('adds a key-value pair to the hash table.', function() {

          expect(ht.size()).to.equal(3)
        })

        it('return the number of key-value pairs.', function() {
          ht.put('David Fincher', 'Gone Girl')

          // expect(ht.contains('David Fincher')).to.equal(true)
          // expect(ht.get('David Fincher')).to.equal('Gone Girl')
          expect(ht.size()).to.equal(4)
        })

        it('should return the data associated with the key.', function() {
          ht.size()
          // expect(ht.get('Alex Garland')).to.equal('Ex Machina')
        })

      })

    })
    describe( '#remove', function() {
      context( 'when given the parameter \'David Fincher\', ', function() {
      it('should remove a key-value pairs in hash table.', function() {
        const ht = new HashTable()
        ht.put('David Fincher', 'Se7en')
        ht.put('Christopher Nolan', 'The Dark Knight')
        ht.put('Alex Garland', 'Ex Machina')
        ht.remove('David Fincher')
        ht.contains('David Fincher')

        expect(ht.contains('David Fincher')).to.equal(undefined)

      })
      })

      describe( '#iterate', function() {
        context( 'when the hash table contains multiple key-value pairs', function() {
        it('should apply given function to each key-value pair in hashtable', function() {
          const ht = new HashTable()

          ht.put('David Fincher', 'Se7en')
          ht.put('Christopher Nolan', 'The Dark Knight')
          ht.put('Alex Garland', 'Ex Machina')

          let testArray = []
          ht.iterate((key, value) => {
            testArray.push(key)
            testArray.push(value)
          })

          expect(testArray).to.include.members(['Se7en','The Dark Knight', 'Ex Machina'])
        })
        })
    })
  })
})
