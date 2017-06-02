// import chai, { expect } from 'chai'
// import chaiChange from 'chai-change'
// import DirectedGraph from '../src/directedGraph'
//
// chai.use(chaiChange)
//
// // describe('DirectedGraph', function() {
// // 'use strict'
//
// let diGraph
//
// beforeEach( function() {
//    diGraph = new DirectedGraph()
//   //  diGraph.insert( someData )
//
//  })
//
//  it('exists', function() {
//    expect(DirectedGraph).to.be.a('function')
//  })
//
//  describe(  '#addVertex', function() {
//    context( 'when given the parameter \'Lights\', ', function() {
//
//
//     it('should return false if graph contains the vertex', function() {
//
//       expect(diGraph.hasVertex('Art Show')).to.equal(true)
//       expect(diGraph.count()).to.equal(3)
//     })
//
//     it('should add direction from 'v1' to 'v2'', function() {
//
//       expect(diGraph.hasDirection('Art Show', 'Movies')).to.equal(true)
//       expect(diGraph.getDirectionWeight('Art Show', 'Dinner')).to.equal(null)
//     })
//
//     it('should return an array of separated vertices', function() {
//
//       expected(diGraph.getSeparatedVertices()).to.be.an('array')
//     })
//
//     it('should return false if v1 and v2 do not have a direction', function() {
//
//       expect(diGraph.hasDirection('Art Show', 'Movies')).to.equal(false)
//     })
//   })
// })
