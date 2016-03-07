var Scene = require('gl-scene')
var Context = require('gl-context')
var vignette = require('gl-vignette-background')
var fit = require('canvas-fit')
var orbit = require('canvas-orbit-camera')
var bunny = require('bunny')

module.exports = Demo

function Demo (material, opts) {
  if (!(this instanceof Demo)) return new Demo(material, opts)
  if (!material) throw Error ("Must specify a material")
  if (!opts) opts = {}
  if (!opts.initial) opts.initial = {}
  
  if (!opts.complex) {
    opts.complex = bunny
    opts.complex.positions = opts.complex.positions.map(function (p) {
      return [p[0], p[1] - 3, p[2]]
    })
  }

  if (!opts.canvas) {
    opts.canvas = document.createElement('canvas')
    if (!opts.root) document.body.appendChild(opts.canvas)
    else opts.root.appendChild(opts.canvas)
  }

  window.addEventListener('resize', fit(opts.canvas), false)

  var gl = Context(opts.canvas, tick)  
  var background = vignette(gl)
  var scene = Scene(gl)

  var shapes = [
    {
      id: 'shape',
      complex: opts.complex,
      position: [0, 0, 0],
      material: 'example',
      style: opts.initial
    }
  ]

  var lights = [
    {
      position: [10, 10, 10, 1],
      style: {color: [1, 1, 1], intensity: 6.0, ambient: 1.0, attenuation: 0.01}
    }
  ]

  background.style({
    smoothing: [-2, 0.8],
    color1: [0.05, 0.05, 0.05],
    color2: [0.2, 0.2, 0.2],
    coloredNoise: false,
    noiseAlpha: 0.1,
    offset: [0, 0]
  })

  scene.shapes(shapes)
  scene.lights(lights)
  scene.materials({example: material})
  scene.init()

  var camera = orbit(opts.canvas)

  var t = 0

  function tick () { 
    gl.disable(gl.DEPTH_TEST)
    background.draw()
    scene.draw(camera)
    scene.select('#shape').rotation(t, [0, 1, 0])
    t += 0.005
  }
}
