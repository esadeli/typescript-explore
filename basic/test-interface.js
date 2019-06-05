"use strict";
// without interface
function printLabelOld(labelledObj) {
    return labelledObj.label;
}
var myObj = { size: 8, label: 'This is 8' };
// test case
console.log(printLabelOld(myObj));
;
function printLabel(labelledObj) {
    if (labelledObj.label === 'this is 9') {
        return labelledObj.label;
    }
    return 'black';
}
var myObj2 = {}; //
var myObj3 = { label: 'this is 9' };
var myObj4 = { name: 'hi' };
// test case
console.log(printLabel(myObj2)); // black
console.log(printLabel(myObj3)); // this is 9
function createSquare(config) {
    var newSquare = { color: "white", area: 100, message: 'Test yes' };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
// test case
console.log(createSquare({ color: 'purple' }));
console.log(createSquare({ color: 'brown', width: 7 }));
