'use strict'

const koa           = require('koa')
  , mount           = require('koa-mount')
  , koaBody         = require('koa-body')
  , logger          = require('koa-logger')
  , cors            = require('kcors')
  , APImaps         = require('./api/maps')
  , APIroutes       = require('./api/routes')
  , app             = koa()

let handleErr = function* (next) {
  try {
    yield next
  } catch(err) {
    this.type = 'json'
    this.status = err.status || 500
    this.body = {error: 'A unexpected error ocurred'}
    this.app.emit('error', err, this)
  }
}

app.use(koaBody())
app.use(logger())
app.use(cors())
app.use(mount('/v1/maps', APImaps.middleware()))
app.use(mount('/v1/routes', APIroutes.middleware()))
app.use(handleErr)

module.exports = app
