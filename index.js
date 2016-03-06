var context = require('gl-context')
var fit = require('canvas-fit')
var orbit = require('canvas-orbit-camera')
var bunny = require('bunny')
var icosphere = require('icosphere')

var material = require('gl-scene-lambert-material')

var canvas = document.body.appendChild(document.createElement('canvas'))
window.addEventListener('resize', fit(canvas), false)
var gl = context(canvas, tick)

var scene = require('gl-scene')(gl)

var shapes = [
  {
    complex: bunny,
    position: [0, 0, 0],
    material: 'example'
  }
]

var lights = [
  {
    position: [10, 10, 10, 1],
    style: {color: [1, 1, 1], intensity: 6.0, ambient: 1.0, attenuation: 0.01}
  }
]

scene.shapes(shapes)
scene.lights(lights)
scene.materials({example: material})
scene.init()

var camera = orbit(canvas)

function tick () { 
  scene.draw(camera)
}