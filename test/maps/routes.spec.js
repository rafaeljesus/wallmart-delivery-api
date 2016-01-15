'use strict'

const supertest = require('supertest')
  , mocha = require('mocha')
  , expect = require('chai').expect
  , Maps = require('../../api/maps/collection')
  , app = require('../../')
  , request = supertest(app.listen())

describe('MapsRoutesSpec',() => {

  let maps

  beforeEach(() => {
    maps = require('../fixture/maps')()
  })

  afterEach(() => Maps.removeAsync())

  describe('POST /v1/maps', () => {
    it('should save a map', done => {
      request.
        post('/v1/maps').
        set('Accept', 'application/json').
        send(maps).
        expect('Content-Type', /json/).
        expect(200, done)
    })
  })

  describe('GET /v1/maps/:name', () => {

    beforeEach(() => Maps.save(maps))

    it('should show shortest path', done => {
      request.
        get(`/v1/maps/${maps.name}`).
        set('Accept', 'application/json').
        query({src: 'A', target: 'D', autonomy: 10, liter: 2.50}).
        expect('Content-Type', /json/).
        expect(200, (err, res) => {
          if (err) return done(err)
          expect(res.body).to.eql({cost: 6.25, points: ['A', 'B', 'D']})
          done()
        })
    })
  })

})
