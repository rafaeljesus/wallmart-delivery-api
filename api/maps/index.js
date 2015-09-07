'use strict'

const router    = require('koa-router')()
  , controller  = require('./controller')

router.post('/', controller.create)
router.get('/:name', controller.show)

module.exports = router
