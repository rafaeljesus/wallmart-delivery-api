'use strict'

const chai = require('chai')
  , expect = chai.expect
  , Graph = require('../../lib/graph')

describe('GraphSpec', () => {

  let graph
  let map = require('../fixture/maps')()

  beforeEach(() => {
    graph = Graph(map.routes)
  })

  describe('.constructor', () => {
    it('should define property vertex', () => {
      expect(graph.vertex).to.be.ok
    })
  })

  describe('.findShortestPathBetween', () => {

    it('should find shortest path between A and B', () => {
      const src = 'A', target = 'B'
        , res = graph.findShortestPathBetween(src, target)
        , expected = {distance: 10, points: ['A', 'B']}
      expect(res).to.deep.equal(expected)
    })

    it('should find shortest path between A and C', () => {
      const src = 'A', target = 'C'
        , res = graph.findShortestPathBetween(src, target)
        , expected = {distance: 20, points: ['A', 'C']}
      expect(res).to.deep.equal(expected)
    })

    it('should find shortest path between A and D', () => {
      const src = 'A', target = 'D'
        , res = graph.findShortestPathBetween(src, target)
        , expected = {distance: 25, points: ['A', 'B', 'D']}
      expect(res).to.deep.equal(expected)
    })

    it('should find shortest path between A and E', () => {
      const src = 'A', target = 'E'
        , res = graph.findShortestPathBetween(src, target)
        , expected = {distance: 60, points: ['A', 'B', 'E']}
      expect(res).to.deep.equal(expected)
    })
  })

})
