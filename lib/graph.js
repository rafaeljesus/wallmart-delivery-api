'use strict'

let PriorityQueue = require('priorityqueuejs')

let assign = function(src, target, distance) {
  this.vertex || (this.vertex = {})
  this.vertex[src] || (this.vertex[src] = {})
  this.vertex[src][target] = distance
}

let assignEdge = function(route) {
  let args1 = [route.src, route.target, route.distance]
  let args2 = [route.target, route.src, route.distance]
  assign.apply(this, args1)
  assign.apply(this, args2)
}

let enqueue = function(visitor, data, point, queue, target) {
  let node = data[visitor] || (data[visitor] = {})
  let dis = data[point].d + this.vertex[point][visitor]
  if (node.queueing || node.d < dis) return
  node.d = dis
  node.h = node.h || this.vertex[point][visitor] * (target.charCodeAt(0) - visitor.charCodeAt(0))
  node.f = dis + node.h
  node.parent = point
  node.queueing = true
  queue.enq(visitor)
}

let Graph = function(routes) {
  if (!(this instanceof Graph)) return new Graph(routes)
  routes.map(assignEdge, this)
}

Graph.prototype.findShortestPathBetween = function(src, target) {
  let data = {}
  data[src] = {d: 0, f: 0}

  let queue = new PriorityQueue(function(a, b) {
    return data[b].f - data[a].f
  })

  queue.enq(src)

  while (!queue.isEmpty()) {
    let point = queue.deq()
    if (point === target) {
      let points = [point]
      let distance = data[point].d
      while (data[point].parent) {
        point = data[point].parent
        points.unshift(point)
      }

      return {
        distance: distance,
        points: points
      }
    }

    Object
      .keys(this.vertex[point])
      .forEach(function(visitor) {
        let args = [visitor, data, point, queue, target]
        return enqueue.apply(this, args)
      }, this)
  }
}

module.exports = Graph
