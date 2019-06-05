"use strict";
// Simple Generic
function echo(data) {
    return data;
}
console.log(echo('Halo'));
console.log(echo('Halo').length);
console.log(echo(30));
console.log(echo(30).length);
console.log(echo({ name: 'Hai', age: 10 }));
// Typescript generic function
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Halo'));
console.log(betterEcho('Halo').length);
console.log(betterEcho(30));
// console.log(betterEcho<number>('30')) // will cause compilation error
// console.log(betterEcho(30).length); // will cause compilation error
console.log(betterEcho({ name: 'Hai', age: 10 }));
// Typescript built-in Generic: Array
function showArray(arr) {
    return arr;
}
function showArray2(arr) {
    return arr;
}
function showArray3(arr) {
    return arr;
}
// will give the same result as in Array<any>
// T[] is the same as Array<T>
function showArray4(arr) {
    return arr;
}
var checkNum = showArray2([1, 2, 3]);
var checkStr = showArray2(['1', '2', '3']);
console.log(showArray([1, 2, 3]));
// console.log(showArray(3)) // not an array will give compilation error
// console.log(showArray(['1','2','3'])) // array of string will give compilation error
console.log(checkNum);
console.log(checkStr);
checkNum.push('2');
checkStr.push(2);
console.log(showArray2(checkNum));
console.log(showArray2(checkStr));
// console.log(showArray2(3)) // not an array will give compilation error
console.log(showArray2(['1', '2', '3']));
// let checkNum2 = showArray3([1,2,3]) // array of number will give compilation error
var checkStr2 = showArray3(['1', '2', '3']);
// console.log(showArray3([1,2,3])) // array of number will give compilation error
// console.log(showArray3(3)) // not an array will give compilation error
console.log(showArray3(['1', '2', '3']));
// checkNum2.push('2')
// checkStr2.push(2) // number cannot be assigned to string
// console.log(showArray3(checkNum2)); 
console.log(showArray3(checkStr2));
console.log(showArray4([1, 2, 3]));
// console.log(showArray4(3)) // not an array will give compilation error
console.log(showArray4(['1', '2', '3']));
// Generic function type
var superEcho = betterEcho;
console.log(superEcho(4));
console.log(superEcho('empat'));
var superEcho3 = function instanteEcho(num1, num2) {
    console.log(num2);
    // if(typeof num1 === 'string' && typeof num2 === 'string'){
    //   return num1+num2
    // }
    return num1;
};
// console.log(superEcho3('4',5)) // will give a compilation error
console.log(superEcho3('5', '4'));
// Generic class
var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
        this.baseValue = 0;
        this.multiplyValue = 0;
    }
    SimpleClass.prototype.calculate = function () {
        return this.baseValue * this.multiplyValue;
    };
    return SimpleClass;
}());
var simple1 = new SimpleClass();
simple1.baseValue = 20;
simple1.multiplyValue = 10;
console.log(simple1.calculate());
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype.calculate = function () {
        console.log(typeof this.baseValue);
        return +this.baseValue * +this.multiplyValue; // + could cast a string to number 
    };
    return GenericClass;
}());
var generic1 = new GenericClass();
// generic1.baseValue = 'something'; // will give a compilation error
// generic1.baseValue ='20'; // will give a compilation error
generic1.multiplyValue = 10;
console.log(generic1.calculate());
// Generic class with constraint
var GenericClassCons = /** @class */ (function () {
    function GenericClassCons() {
    }
    GenericClassCons.prototype.calculate = function () {
        console.log(typeof this.baseValue);
        return +this.baseValue * +this.multiplyValue; // + could cast a string to number 
    };
    return GenericClassCons;
}());
var generic2 = new GenericClassCons(); // we can't use boolean type since we have already limit it into string and number only
generic2.baseValue = 20;
generic2.multiplyValue = 15;
console.log(generic2.calculate());
// Generic class with constraint and alternative type
// T can be extended from U
var GenClassConst = /** @class */ (function () {
    function GenClassConst() {
    }
    GenClassConst.prototype.calculate = function () {
        console.log(typeof this.baseValue);
        return +this.baseValue * +this.multiplyValue; // + could cast a string to number 
    };
    return GenClassConst;
}());
var generic3 = new GenClassConst();
generic3.baseValue = 20;
generic3.multiplyValue = '3';
console.log(generic3.calculate());
//# sourceMappingURL=exersice8.1.js.map