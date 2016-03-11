# gl-material-demo

[![NPM version][npm-image]][npm-url]
![experimental][experimental-image]
[![js-standard-style][standard-image]][standard-url]

Demo your 3d materials!

This module will render an object with a specified material. The material must conform to the format specified in [`gl-material`](https:github.com/freeman-lab/gl-material), which defines a material as a fragment shader and a list of variable style parameters. The demo will automatically create sliders that let you experiment with changing all the material's parameters.

**[live demo for `gl-lambert-material`](https://gl-lambert-material.surge.sh)**

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
- `opts.flatten` whether to flatten geometry, if `undefined` will use [`bunny`](https://github.com/miokolysenko/bunny)
- `opts.initial` initial style setting, if `undefined` will be set to `true`
- `opts.lights` array of lights to use in the rendered scene, if `undefined` will use a single point light
- `opts.canvas` existing canvas element to use, if `undefined` will create one
- `opts.root` DOM element to append created canvas to, if `undefined` will append to `document.body`

[npm-image]: https://img.shields.io/badge/npm-v1.0.0-lightgray.svg?style=flat-square
[npm-url]: https://npmjs.org/package/gl-material-demo
[standard-image]: https://img.shields.io/badge/code%20style-standard-lightgray.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[experimental-image]: https://img.shields.io/badge/stability-experimental-lightgray.svg?style=flat-square