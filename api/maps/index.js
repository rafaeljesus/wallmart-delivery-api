'use strict'

const router    = require('koa-router')()
  , controller  = require('./controller')

router.post('/', controller.save)
router.get('/:name', controller.show)

module.exports = router
