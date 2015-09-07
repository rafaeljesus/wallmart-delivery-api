'use strict'

const monk  = require('monk')
  , wrap    = require('co-monk')
  , db      = monk('localhost/wall')
  , maps    = wrap(db.get('maps'))

exports.create = function* (map) {
  return yield maps.insert(map)
}

exports.findByName = function* (name) {
}

exports.remove = function* () {
  try {
    return yield maps.remove()
  } catch(err) {
    throw err
  }
}
