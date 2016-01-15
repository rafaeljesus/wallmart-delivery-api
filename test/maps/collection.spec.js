'use strict'

const chai = require('chai')
  , mocha = require('mocha')
  , expect = chai.expect
  , Maps = require('../../api/maps/collection')

describe('MapsCollectionSpec', () => {

  let maps

  beforeEach(() => {
    maps = require('../fixture/maps')()
  })

  afterEach(() => Maps.removeAsync())

  describe('.save', () => {

    context('.create', () => {

      it('should create a maps collection', () => {
        return Maps.save(maps).then(doc => {
          expect(doc._id).to.exist
        })
      })
    })

    context('.update', () => {

      beforeEach(() => Maps.save(maps))

      it('should update a maps collection', () => {
        const newRoute = {src: 'D', target: 'F', distance: 45.0}
        maps.routes.push(newRoute)
        return Maps.save(maps).then(doc => {
          expect(doc.routes).to.have.length(7)
        })
      })
    })
  })

  describe('.findByName', () => {

    beforeEach(() => Maps.save(maps))

    it('should find by name', () => {
      return Maps.
        findByName(maps.name).
        then(doc => expect(doc).to.exist)
    })
  })

})
