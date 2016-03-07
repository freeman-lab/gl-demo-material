# gl-scene-demo-material

Demo your [`gl-scene`](https://github.com/freeman-lab/gl-scene) materials!

This module will render an object with a provided material, and create sliders to experiment with changing all the material's style parameters.

## install

Add to your project with

```
npm install gl-scene-demo-material
```

## example

```javascript
var material = require('gl-scene-normal-material')
var demo = require('gl-scene-demo-material')

demo(material, {initial: {saturation: 0.75}})
```

## usage

#### `demo(material, [opts])`

##### `material` 
Should conform to the `gl-scene-material` specification.

##### `opts`
The following are optional parameters
- `complex`: simplicial complex to demo material with, if `undefined` will use [`bunny`](https://github.com/miokolysenko/bunny)
- `initial`: initial style setting, if `undefined` will use the material's defaults
- `lights`: array of lights to use in the rendered scene, if `undefined` will use a single point light
- `canvas`: existing camvas element to use, if `undefined` will create one
- `root`: DOM element to append created canvas to, if `undefined` will append to body