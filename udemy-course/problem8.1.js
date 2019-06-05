"use strict";
// Generic Typescript exersice
// Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.
// Let's keep it simple and only add the following methods to the Map:
//     setItem(key: string, item: T) // should create a new key-value pair
//     getItem(key: string) // should retrieve the value of the provided key
//     clear() // should remove all key-value pairs
//     printMap() // should output key-value pairs
// The map should be usable like shown below:
//     const numberMap = new MyMap<number>();
//     numberMap.setItem('apples', 5);
//     numberMap.setItem('bananas', 10);
//     numberMap.printMap();
//     const stringMap = new MyMap<string>();
//     stringMap.setItem('name', "Max");
//     stringMap.setItem('age', "27");
//     stringMap.printMap();
var Map = /** @class */ (function () {
    function Map() {
        this.map = {};
    }
    Map.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    Map.prototype.getItem = function (key) {
        return this.map[key];
    };
    Map.prototype.clear = function () {
        this.map = {};
    };
    Map.prototype.printMap = function () {
        console.log(this.map, '-----');
        for (var item in this.map) {
            console.log(item, '----', this.map[item]);
        }
    };
    return Map;
}());
var numberMap = new Map();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
var stringMap = new Map();
stringMap.setItem('name', 'Max');
stringMap.setItem('age', '27');
stringMap.printMap();
console.log(stringMap.getItem("apples"));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
var testSuper = {
    name: 9,
    role: 'Painter'
};
console.log(testSuper);
//# sourceMappingURL=problem8.1.js.map