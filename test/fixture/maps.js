'use strict'

module.exports = () => {
  return {
    name: 'SP',
    routes: [{
      src: 'A',
      target: 'B',
      distance: 10.0
    }, {
      src: 'B',
      target: 'D',
      distance: 15.0
    }, {
      src: 'A',
      target: 'C',
      distance: 20.0
    }, {
      src: 'C',
      target: 'D',
      distance: 30.0
    }, {
      src: 'B',
      target: 'E',
      distance: 50.0
    }, {
      src: 'D',
      target: 'E',
      distance: 30.0
    }]
  }
}
