'use strict'

const Promise = require('bluebird')
  , mongoose = require('mongoose')
  , Schema = mongoose.Schema

Promise.promisifyAll(mongoose)

const Maps = Schema({
  name: String,
  routes: [{
    src: String,
    target: String,
    distance: Number
  }],
})

Maps.statics.save = function(data, options) {
  options || (options = {})
  options.upsert = true
  options.new = true
  const query = {name: data.name}
  return this.findOneAndUpdateAsync(query, data, options)
}

Maps.statics.findByName = function(name) {
  const query = {name: name}
  return this.findOneAsync(query)
}

module.exports = mongoose.model('maps', Maps)
