"use strict";
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
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.type = 'big';
        this.age = 27;
        this.name = name;
    }
    // printAge () {
    //   console.log(this.age)
    // }
    Person.prototype.printAge = function (type) {
        console.log(this.age);
        this.setType(type);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Efrat', 'esadeli');
console.log(person);
// person.printAge();
// person.setType('Software Developer');
person.printAge('Entrepreneur');
// Inheritance
var Citizen = /** @class */ (function (_super) {
    __extends(Citizen, _super);
    // name = 'Charis';
    function Citizen(username) {
        return _super.call(this, "Charis", username) || this;
        // this.age = 90
    }
    Citizen.prototype.setAge = function (age) {
        this.age = age;
    };
    return Citizen;
}(Person));
// let citizen = new Citizen('Bob','Plumber')
// console.log(citizen)
var citizen2 = new Citizen('cahris77');
citizen2.printAge('Carpenter');
citizen2.setAge(40);
console.log(citizen2);
// getter and setter
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Spx';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (val) {
            if (val.length < 4) {
                this._species = 'Spxs';
            }
            else {
                this._species = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species); // spx
plant.species = 'ABC';
console.log(plant.species); // Spxs
plant.species = 'Cactus';
console.log(plant.species); // Cactus
// Static Properties and Method
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.getArea = function (radius) {
        return this.PI * radius;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
// console.log(Helpers.PI);
console.log(Helpers.getArea(2));
// abstract class
var Animal = /** @class */ (function () {
    function Animal(name, type) {
        this.name = 'Animal';
        this.type = 'Type Default';
        this.name = name;
        this.type = type;
    }
    Animal.prototype.identity = function () {
        return "Hi this is " + this.name + " I am from " + this.type + " type";
    };
    return Animal;
}());
// let animal = new Animal('Dog','Mammal') abstract class can not be instantiated
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(size) {
        var _this = _super.call(this, 'Dog', 'Mammal') || this;
        _this._sound = 'Default sound';
        _this.size = size;
        return _this;
    }
    Dog.prototype.sound = function (sound) {
        this._sound = sound;
    };
    Dog.prototype.identity = function () {
        return "Hi this is " + this.name + " I am from " + this.type + " type and I am on " + this.size + " size " + this._sound + "!!!";
    };
    return Dog;
}(Animal));
var blackie = new Dog('medium');
console.log(blackie);
console.log(blackie.identity());
blackie.sound('woof');
console.log(blackie);
console.log(blackie.identity());
// private constructors
// class ExSingleton {
//   private static instance: ExSingleton
//   private constructor (public name: string) {}
//   static getInstance () {
//     if(!ExSingleton.instance) {
//       ExSingleton.instance = new ExSingleton ('New Singleton')
//     }
//     return ExSingleton.instance
//   }
// }
// // let exSingleton = new ExSingleton()
// // console.log(exSingleton)
// let exSingleton2 = ExSingleton.getInstance()
// console.log(exSingleton2)
// console.log('this is name ',exSingleton2.name);
// exSingleton2.name = 'Changed Singleton';
// console.log('changed name ',exSingleton2.name);
// private constructor --- readonly
var ExSingleton = /** @class */ (function () {
    function ExSingleton(name) {
        this.name = name;
    }
    ExSingleton.getInstance = function () {
        if (!ExSingleton.instance) {
            ExSingleton.instance = new ExSingleton('New Singleton');
        }
        return ExSingleton.instance;
    };
    return ExSingleton;
}());
// let exSingleton = new ExSingleton()
// console.log(exSingleton)
var exSingleton2 = ExSingleton.getInstance();
console.log(exSingleton2);
console.log('this is name ', exSingleton2.name);
// exSingleton2.name = 'Changed Singleton';
console.log('changed name ', exSingleton2.name);
//# sourceMappingURL=app2.js.map