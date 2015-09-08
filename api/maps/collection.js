'use strict'

const monk  = require('monk')
  , wrap    = require('co-monk')
  , db      = monk('localhost/wall')
  , maps    = wrap(db.get('maps'))

exports.save = function* (map, options) {
  options || (options = {})
  options.upsert = true
  options.new = true
  let query = {name: map.name}
  let update = map
  return yield maps.findAndModify(query, update, options)
}

exports.findByName = function* (name) {
  let query = {name: name}
  return yield maps.findOne(query)
}

exports.remove = function* () {
  return yield maps.remove()
}
