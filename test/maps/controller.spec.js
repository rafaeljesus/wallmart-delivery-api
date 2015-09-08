'use strict'

const supertest = require('supertest')
  , mocha       = require('mocha')
  , app         = require('../../app')
  , Maps        = require('../../api/maps/collection')
  , request     = supertest(app.listen())

require('co-mocha')(mocha)

describe('MapsControllerSpec', function() {

  let maps

  beforeEach(function() {
    maps = require('../fixture/maps')()
  })

  afterEach(function* () {
    try {
      yield Maps.remove()
    } catch(err) {
      throw err
    }
  })

  describe('POST /v1/maps', function() {
    it('should create a map', function(done) {
      request
        .post('/v1/maps')
        .set('Accept', 'application/json')
        .send(maps)
        .expect('Content-Type', /json/)
        .expect(201, done)
    })
  })

  describe('GET /v1/maps/:name', function() {

    beforeEach(function* () {
      try {
        yield Maps.save(maps)
      } catch(err) {
        throw err
      }
    })

    it('should show shortest path', function(done) {
      request
        .get('/v1/maps/' + maps.name)
        .set('Accept', 'application/json')
        .query({autonomy: 10, liter: 2.50})
        .expect('Content-Type', /json/)
        .expect(function(res) {
          res.body = {cost: 6.25, points: ['A', 'B', 'D']}
        })
        .expect(200, done)
    })
  })

})
