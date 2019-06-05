"use strict";
// Namespace
/// <reference path="./exersice6.1-circle.ts" />
/// <reference path= "./exersice6.1-rectangle.ts" />
// namespace MathFunc {
//   const PI: number = 3.14
//   export function getRectangleArea (width: number, length: number):number {
//     return width*length
//   }
//   export function setCircleArea (radius: number): number {
//     return PI*radius*radius
//   }
// }
// if we have two level or more namespaces we can create an alias
var MyRectangleMath = MathFunc.Rectangle;
var PI = 2.03;
console.log(MyRectangleMath.getRectangleArea(4, 5));
// console.log(MathFunc.Rectangle.getRectangleArea(4,5));
console.log(MathFunc.getCircleArea(3));
console.log(PI);
// there are 3 ways to include the MathFunc namespace i.e.
// - include all the files in the index.html <script src="...."></script>
// - bundle via terminal: 
//   tsc --outFile exersice6.1.js exersice6.1-circle.ts exersice6.1-rectangle.ts exersice6.1.ts
// - define a reference path in the main file.ts
//   e.g. <reference path="./exersice6.1-rectangle.ts" />
//   bundle those files via terminal: tsc <original .ts file> --outFile <target .js file>
//   e.g. tsc exersice6.1.ts --outFile exersice6.1.js
// Modules
// Make sure to install SystemJS (that's the package we'll use) < 2.
// With a command like this one:
// npm install --save systemjs@0.21.5 
// https://github.com/systemjs/systemjs
// https://stackoverflow.com/questions/38263406/what-are-differences-between-systemjs-and-webpack
//# sourceMappingURL=exersice6.1.js.map