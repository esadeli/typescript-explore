"use strict";
var MathFunc;
(function (MathFunc) {
    var Rectangle;
    (function (Rectangle) {
        function getRectangleArea(width, length) {
            return width * length;
        }
        Rectangle.getRectangleArea = getRectangleArea;
    })(Rectangle = MathFunc.Rectangle || (MathFunc.Rectangle = {}));
})(MathFunc || (MathFunc = {}));
//# sourceMappingURL=exersice6.1-rectangle.js.map