# gl-scene-demo-material

Demo your [`gl-scene`](https://github.com/freeman-lab/gl-scene) materials!

This module will render an object with a provided material that conforms to the format defined in `gl-scene-material`. It will also create sliders that let you experiment with changing all the material's style parameters.

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

Create a demo by providing a `material` that conforms to the `gl-scene-material` format.

You can also provide the following optional arguments in `opts`

- `opts.complex` simplicial complex to demo material with, if `undefined` will use [`bunny`](https://github.com/miokolysenko/bunny)
- `opts.initial` initial style setting, if `undefined` will use the material's defaults
- `opts.lights` array of lights to use in the rendered scene, if `undefined` will use a single point light
- `opts.canvas` existing canvas element to use, if `undefined` will create one
- `opts.root` DOM element to append created canvas to, if `undefined` will append to `document.body`
