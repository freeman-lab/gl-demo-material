var Scene = require('gl-scene')
var Context = require('gl-context')
var fit = require('canvas-fit')
var orbit = require('canvas-orbit-camera')
var bunny = require('bunny')
var css = require('dom-css')
var control = require('control-panel')
var foreach = require('lodash.foreach')
var mapvalues = require('lodash.mapvalues')

module.exports = Demo

function Demo (material, opts) {
  if (!(this instanceof Demo)) return new Demo(material, opts)
  if (!material) throw Error ("Must specify a material")
  if (!opts) opts = {}
  if (!opts.initial) opts.initial = mapvalues(material.styles, 'default')
  if (!opts.root) opts.root = document.body
  if (!opts.background) opts.background = [0.05, 0.05, 0.05]

  if (!opts.complex) {
    opts.complex = bunny
    opts.complex.positions = opts.complex.positions.map(function (p) {
      return [p[0], p[1] - 4, p[2]]
    })
  }

  if (!opts.canvas) {
    opts.canvas = document.createElement('canvas')
    opts.root.appendChild(opts.canvas)
  }

  window.addEventListener('resize', fit(opts.canvas), false)

  var gl = Context(opts.canvas, tick)  
  var scene = Scene(gl, {background: opts.background})

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
      style: {color: [1, 1, 1], intensity: 10.0, ambient: 1.0, attenuation: 0.01}
    }
  ]

  scene.shapes(shapes)
  scene.lights(lights)
  scene.materials({example: material})
  scene.init()

  var camera = orbit(opts.canvas)
  camera.lookAt([0, 0, 20], [0, 0, 0], [0, 0, 1])

  var t = 0

  function tick () { 
    scene.draw(camera)
    scene.select('#shape').rotation(t, [0, 1, 0])
    t += 0.0075
  }

  var inputs = []
  foreach(material.styles, function (value, key) {
    switch (value.type) {
      case 'vec3':
        inputs.push({type: 'color', label: key, format: 'array', initial: opts.initial[key]})
        break
      case 'float':
        inputs.push({type: 'range', label: key, min: value.min, max: value.max, initial: opts.initial[key]})
        break
      case 'bool':
        inputs.push({type: 'checkbox', label: key, initial: opts.initial[key]})
        break
    }
  })

  var panel = control(inputs, 
    {position: 'top-right', theme: 'dark', width: 300, title: 'gl-material-' + material.name}
  )

  panel.on('input', function (data) {
    console.log(data)
    var style = {}
    foreach(data, function (value, key) {
      style[key] = value
    })
    scene.select('#shape').style(style)
  })
}
