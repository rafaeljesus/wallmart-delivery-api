'use strict'

const chai    = require('chai')
  , mocha     = require('mocha')
  , expect    = chai.expect
  , Maps      = require('../../api/maps/collection')

require('co-mocha')(mocha)

describe('MapCollectionSpec', function() {

  let fixture = require('../fixture/routes')()

  afterEach(function* () {
    try {
      yield Maps.remove()
    } catch(err) {
      expect(err).to.not.be.ok
    }
  })

  it('should create a map collection', function* () {
    try {
      let res = yield Maps.create(fixture)
      expect(res._id).to.be.ok
    } catch(err) {
      expect(err).to.not.be.ok
    }
  })

})
