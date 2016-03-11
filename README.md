# gl-material-demo

Demo your 3d materials!

This module will render an object with a specified material. The material must conform to the format specified in [`gl-material`](https:github.com/freeman-lab/gl-material), which defines a material as a fragment shader and a list of variable style parameters. The demo will automatically create sliders that let you experiment with changing all the material's parameters.

See an example for [`gl-lambert-material`](https://gl-lambert-material.surge.sh)

## install

Add to your project with

```
npm install gl-material-demo
```

## example

```javascript
var material = require('gl-normal-material')
var demo = require('gl-material-demo')

demo(material)
```

## usage

#### `demo(material, [opts])`

Create a demo by providing a `material` that conforms to the [`gl-material`](https:github.com/freeman-lab/gl-material) format.

You can also provide the following optional arguments in `opts`

- `opts.complex` simplicial complex to demo material with, if `undefined` will use [`bunny`](https://github.com/miokolysenko/bunny)
- `opts.initial` initial style setting, if `undefined` will use the material's defaults
- `opts.lights` array of lights to use in the rendered scene, if `undefined` will use a single point light
- `opts.canvas` existing canvas element to use, if `undefined` will create one
- `opts.root` DOM element to append created canvas to, if `undefined` will append to `document.body`
