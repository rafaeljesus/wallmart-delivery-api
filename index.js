'use strict'

const koa = require('koa')
  , kbody = require('koa-bodyparser')
  , serve = require('koa-static')
  , logger = require('koa-logger')
  , cors = require('kcors')
  , homeAPI = require('./api/home/routes')
  , mapsAPI = require('./api/maps/routes')
  , app = koa()

app.use(kbody())
app.use(logger())
app.use(cors({
  methods: ['POST', 'GET']
}))
app.use(homeAPI.routes())
app.use(mapsAPI.routes())
app.use(serve('public'))

module.exports = app
