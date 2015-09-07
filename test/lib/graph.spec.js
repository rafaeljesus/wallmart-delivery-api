'use strict'

const chai      = require('chai')
  , expect      = chai.expect
  , Graph       = require('../../lib/graph')

describe('GraphSpec', function() {

  let graph
  let map = require('../fixture/maps')()

  beforeEach(function() {
    graph = Graph(map.routes)
  })

  describe('.constructor', function() {
    it('should define property vertex', function() {
      expect(graph.vertex).to.be.ok
    })
  })

  describe('.findShortestPathBetween', function() {

    it('should find shortest path between A and B', function() {
      let src = 'A', target = 'B'
        , res = graph.findShortestPathBetween(src, target)
        , expected = {distance: 10, points: ['A', 'B']}
      expect(res).to.deep.equal(expected)
    })

    it('should find shortest path between A and C', function() {
      let src = 'A', target = 'C'
        , res = graph.findShortestPathBetween(src, target)
        , expected = {distance: 20, points: ['A', 'C']}
      expect(res).to.deep.equal(expected)
    })

    it('should find shortest path between A and D', function() {
      let src = 'A', target = 'D'
        , res = graph.findShortestPathBetween(src, target)
        , expected = {distance: 25, points: ['A', 'B', 'D']}
      expect(res).to.deep.equal(expected)
    })

    it('should find shortest path between A and E', function() {
      let src = 'A', target = 'E'
        , res = graph.findShortestPathBetween(src, target)
        , expected = {distance: 60, points: ['A', 'B', 'E']}
      expect(res).to.deep.equal(expected)
    })
  })

})
