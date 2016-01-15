'use strict'

const router = require('koa-router')()
  , Maps = require('./collection')
  , Graph  = require('../../lib/graph')

router.
  /**
   * @api {post} /v1/maps Create or Update a Map
   * @apiGroup Maps
   * @apiSuccess {String} name Name
   * @apiSuccess {Object[]} routes Routes
   * @apiExample {json} Example usage:
   *    curl -X POST http://wallmart-delivery-api/v1/maps \
   *    -d 'name=SP' \
   *    -d 'routes=[{
   *        "src": "A",
   *        "target": "B",
   *        "distance": "10"
   *      }]'
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 201 OK
   *    {
   *      "_id": "20150101123490"
   *    }
   * @apiErrorExample {json} Error
   *    HTTP/1.1 422 Unprocessable Entity
   */
  post('/v1/maps', function *() {
    this.body = yield Maps.
      save(this.request.body).
      then(res => res._id).
      catch(err => this.throw(422, err))
  }).
  /**
   * @api {get} /v1/maps/:name Show Shortest Path
   * @apiGroup Maps
   * @apiSuccess {String} src Source
   * @apiSuccess {String} target Target
   * @apiSuccess {Number} autonomy Autonomy
   * @apiSuccess {Number} liter Liter
   * @apiExample {json} Example usage:
   *    curl -X GET https://wallmart-delivery-api/v1/SP \
   *    -d 'src=A' \
   *    -d 'target=D' \
   *    -d 'autonomy=10' \
   *    -d 'liter=2.50'
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      "cost": 6.25,
   *      "points": ['A', 'B', 'D']
   *    }
   * @apiErrorExample {json} Show Error
   *    HTTP/1.1 412 Precondition Failed
   */
  get('/v1/maps/:name', function *() {
    const name = this.params.name
    const query = this.query
    this.body = yield Maps.
      findByName(name).
      then(doc => {
        const graph = Graph(doc.routes)
        const routes = graph.findShortestPathBetween(query.src, query.target)
        return {
          cost: routes.distance / query.autonomy * query.liter,
          points: routes.points
        }
      }).
      catch(err => this.throw(412, err))
  })

module.exports = router
