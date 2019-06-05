// Note why do we need to install systemJS
// 1. Unless we're using ES6, command such as require import etc
//    is not recognized in native javascript
// 2. Therefore we need to install webpack or SystemJS
// 3. Better use SystemJS on version 0.19.36 since the latest version is not working
//     --> npm install --save systemjs@0.19.36

// Further reading about how modules works in Typescript recommended by Udemy Course
// Available / Useable Module Formats
// You can compile your code against a couple of common module formats. This determines, to
// which way of JS code splitting your TS code is compiled.
// The following article gives a great overview and explanation:
// https://auth0.com/blog/javascript-module-systems-showdown/
// More on TS modules can be learned here:
// https://www.typescriptlang.org/docs/handbook/modules.html#code-generation-for-
// modules

import { getRectangleArea } from './Math/math-rectangle'
// import { PI, getCircleArea } from './Math/math-circle'
import * as Circ from './Math/math-circle'

console.log(getRectangleArea(4,5));
console.log(Circ.getCircleArea(3));
// instead of console.log(getCircleArea(3));
console.log(Circ.PI)
// instead of console.log(PI)

