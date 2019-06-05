"use strict";
// // Exercise 1 - How was your TypeScript Class?
// function Car(name) {
//   this.name = name;
//   this.acceleration = 0;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//   this.honk = function() {
//       console.log("Toooooooooot!");
//   };
//   this.accelerate = function(speed) {
//       this.acceleration = this.acceleration + speed;
//   }
// }
// var car = new Car("BMW");
// car.honk();
// console.log(car.acceleration);
// car.accelerate(10);
// console.log(car.acceleration);
var Car = /** @class */ (function () {
    function Car(name) {
        this.accleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.accleration += speed;
    };
    return Car;
}());
var car = new Car('BMW');
car.honk();
console.log(car.accleration);
car.accelerate(10);
console.log(car.accleration);
// // Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//   width: 0,
//   length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//   return this.width * this.length;
// };
// console.log(rectangle.calcSize());
var BaseObject = /** @class */ (function () {
    function BaseObject() {
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super.call(this) || this;
        _this._width = 0;
        _this._length = 0;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        set: function (_width) {
            this._width = _width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "length", {
        set: function (_length) {
            this._length = _length;
        },
        enumerable: true,
        configurable: true
    });
    Rectangle.prototype.calcSize = function () {
        return this._width * this._length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle();
rectangle.width = 2;
rectangle.length = 5;
console.log(rectangle.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//   _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//   get: function () {
//       return this._firstName;
//   },
//   set: function (value) {
//       if (value.length > 3) {
//           this._firstName = value;
//       }
//       else {
//           this._firstName = "";
//       }
//   },
//   enumerable: true,
//   configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);
var People = /** @class */ (function () {
    function People() {
        this._firstName = "";
        this.enumerable = true;
        this.configurable = true;
    }
    Object.defineProperty(People.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (_firstName) {
            if (_firstName.length > 3) {
                this._firstName = _firstName;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return People;
}());
var people = new People();
console.log(people.firstName);
people.firstName = "Ma";
console.log(people.firstName);
people.firstName = "Maximilian";
console.log(people.firstName);
//# sourceMappingURL=problem5.1.js.map