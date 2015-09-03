'use strict'

const supertest = require('supertest')
  , mocha       = require('mocha')
  , app         = require('../../app')
  , request     = supertest(app.listen())

require('co-mocha')(mocha)

describe('MapsControllerSpec', function() {

  describe('POST /v1/maps', function() {
    it('should create a map', function(done) {
      request
        .post('/v1/maps')
        .set('Accept', 'application/json')
        .send({})
        .expect('Content-Type', /json/)
        .expect(201, done)
    })
  })

})
