'use strict'

exports.create = function* (next) {
  let map = this.request.body

  try {
    this.type = 'json'
    this.status = 201
    this.body = map
  } catch(err) {
    this.throw(500, err)
  }
}
