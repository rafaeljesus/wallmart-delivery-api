'use strict'

const chai    = require('chai')
  , mocha     = require('mocha')
  , expect    = chai.expect
  , Maps      = require('../../api/maps/collection')

require('co-mocha')(mocha)

describe('MapCollectionSpec', function() {

  let maps

  beforeEach(function() {
    maps = require('../fixture/maps')()
  })

  afterEach(function* () {
    try {
      yield Maps.remove()
    } catch(err) {
      expect(err).to.not.be.ok
    }
  })

  describe('.save', function() {

    context('.create', function() {

      it('should create a maps collection', function* () {
        try {
          let res = yield Maps.save(maps)
          expect(res._id).to.be.ok
        } catch(err) {
          expect(err).to.not.be.ok
        }
      })
    })

    context('.update', function() {

      beforeEach(function() {
        let newRoute = {src: 'D', target: 'F', distance: 45.0}
        maps.routes.push(newRoute)
      })

      it('should update a maps collection', function* () {
        try {
          let res = yield Maps.save(maps)
          expect(res.routes).to.have.length(7)
        } catch(err) {
          expect(err).to.not.be.ok
        }
      })
    })

  })

})
