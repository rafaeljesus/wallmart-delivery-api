'use strict'

const Maps = require('./collection')

exports.create = function* (next) {
  let map = this.request.body

  try {
    this.body = yield Maps.save(map)
    this.status = 201
  } catch(err) {
    this.throw(500, err)
  }
}
