'use strict'

const cluster = require('cluster')
  , CPUS = require('os').cpus()
  , log = require('./lib/log')

if (cluster.isMaster) {

  CPUS.forEach(() => cluster.fork())

  cluster.on('listening', worker => log.info(`Worker ${worker.process.pid} connected`))
  cluster.on('disconnect', worker => log.info(`Worker ${worker.process.pid} disconnect`))
  cluster.on('exit', worker => {
    log.info(`Worker ${worker.process.pid} exited`)
  })
}

if (cluster.isWorker) {
  require('./bin/www')
}
