'use strict'

const Maps = require('./collection')
  , Graph  = require('../../lib/graph')

exports.save = function* (next) {
  let map = this.request.body

  try {
    this.body = yield Maps.save(map)
  } catch(err) {
    this.throw(500, err)
  }
}

exports.show = function* (next) {
  let name = this.params.name
    , query = this.query

  try {
    let doc = yield Maps.findByName(name)
      , graph = Graph(doc.routes)
      , routes = graph.findShortestPathBetween(query.src, query.target)
      , cost = routes.distance / query.autonomy * query.liter

    this.body = {cost: cost, points: routes.points}
  } catch(err) {
    this.throw(500, err)
  }
}
