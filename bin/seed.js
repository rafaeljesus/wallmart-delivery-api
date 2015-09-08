'use strict'

const co    = require('co')
  , Maps    = require('../api/maps/collection')
  , fixture = require('../test/fixture/maps')()

co(function* () {
  return yield Maps.save(fixture)
})
.then(function() {
  process.exit()
})
.catch(function(err) {
  console.log(err)
  process.exit(1)
})
