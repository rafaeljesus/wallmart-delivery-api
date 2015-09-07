'use strict'

const monk  = require('monk')
  , wrap    = require('co-monk')
  , db      = monk('localhost/wall')
  , maps    = wrap(db.get('maps'))

exports.save = function* (map, options) {
  options || (options = {})
  options.upsert = true
  let query = {name: map.name}
  let update = {routes: map.routes}
  return yield maps.findAndModify(query, update, options)
}

exports.findByName = function* (name) {
  let query = {name: name}
  return yield maps.find(query)
}

exports.remove = function* () {
  try {
    return yield maps.remove()
  } catch(err) {
    throw err
  }
}
