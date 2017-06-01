import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DirectedGraph from '../src/directedGraph'

chai.use(chaiChange)

describe('DirectedGraph', () => {
'use strict'

it('exists', () => {
  expect(DirectedGraph).to.be.a('function')
})

it('should return false if graph contains the vertex', () => {
  diGraph.addVertex('Art Show')
  diGraph.addVertex('Movies')
  diGraph.addVertex('Dinner')

  diGraph.hasVertex('Art Show')
  diGraph.count()

  expect(diGraph.hasVertex('Art Show')).to.equal(true)
  expect(diGraph.count()).to.equal(3)
})

it('should add direction from 'v1' to 'v2'', () => {
  diGraph.addDirection('Art Show', 'Movies', 7)
  diGraph.hasDirection('Art Show', 'Movies')
  diGraph.getDirectionWeight('Art Show', 'Dinner')

  expect(diGraph.hasDirection('Art Show', 'Movies')).to.equal(true)
  expect(diGraph.getDirectionWeight('Art Show', 'Dinner')).to.equal(null)
})

it('should return an array of separated vertices', () => {
  diGraph.getSeparatedVertices()

  expected(diGraph.getSeparatedVertices()).to.be.an('array')
})

it('should return false if v1 and v2 do not have a direction', () => {
  diGraph.removeDirection('Art Show', 'Movies')
  diGraph.hasDirection('Art Show', 'Movies')

  expect(diGraph.hasDirection('Art Show', 'Movies')).to.equal(false)
})

})
