"use strict";
// Number
var Num = 30;
Num = 50;
// string
var word = 'word';
word = 'kata';
// boolean
var likePrograming;
likePrograming = true;
// any
var Any;
Any = 40;
Any = '40';
// array 
var Arr = ['Aarray', '90'];
Arr = ['800'];
Arr = ['larik'];
console.log(Arr);
// tuples
var tupArr;
tupArr = [80, true];
console.log(tupArr);
// enum
var Role;
(function (Role) {
    Role[Role["Doctor"] = 50] = "Doctor";
    Role[Role["Nurse"] = 8] = "Nurse";
    Role[Role["Patient"] = 9] = "Patient";
})(Role || (Role = {}));
var Iwan = Role.Doctor;
var Adi = Role.Patient;
console.log('Iwan--- ', Iwan);
console.log('Adi ----', Adi);
// function
function getWord() {
    return word;
}
console.log(getWord());
// void
function sayGreat() {
    console.log('Great!!!');
}
sayGreat();
// multiply
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(5, 5));
// define types of function
// let multiFunc: () => void; // define multiFunc as  a void function
var multiFunc; // define multiFunc as a function that requires two number type variable
// with output a number type
// multiFunc = sayGreat
// multiFunc()
multiFunc = multiply;
console.log(multiFunc(2, 3));
// objects
var myLaptop = {
    brand: 'Lenovo',
    price: 12000000
};
console.log(myLaptop);
myLaptop = {
    brand: 'Mac'
};
console.log(myLaptop);
var complexObj = {
    data: [900, 200, 350],
    output: function (all) {
        if (all) {
            console.log(all);
        }
        return this.data;
    }
};
console.log(complexObj);
console.log(complexObj.output(true));
var complexObj2 = {
    data: [1, 2, 3],
    output: function (all) {
        console.log(all);
        return this.data;
    }
};
console.log(complexObj2);
console.log(complexObj2.output(false));
// union types
var myFaveNumber;
myFaveNumber = 30;
myFaveNumber = '30';
// never
// function neverReturns(): never {
//   throw new Error ('This is error')
// }
// neverReturns()
var myNumber = 30;
console.log(myNumber);
myNumber = null;
console.log(myNumber);
// function
function countTo(input) {
    if (input === void 0) { input = 10; }
    for (var i = 0; i < input; i++) {
        console.log('count-----', i);
        // setTimeout(()=>{
        //   console.log('count-----', i)
        // },1000)
    }
}
countTo(3);
// spread operators
var arrNew = [1, 2, 3, 20];
console.log(Math.max(90, 2, 320, 1));
console.log(Math.max.apply(Math, arrNew));
var dateFields = [1980, 2, 1];
// let dateNow = new Date(...dateFields);
// https://stackoverflow.com/questions/45225128/typescript-error-when-using-the-spread-operator
// console.log(dateNow)
// Rest operators
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log("hi " + name + "!");
    return args;
}
var dy = makeArray('May', 9, 20, 22, 800);
console.log(dy);
// Tupple and Rest
function printInfo(name, age) {
    console.log("My name is " + name + " and I am " + age + " old");
}
function printInfo2() {
    var input = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        input[_i] = arguments[_i];
    }
    console.log("My name is " + input[0] + " and I am " + input[1] + " old");
}
printInfo('Andira', 24);
printInfo2('Wawan', 48);
// destructuring array
var myFaveLanguage = ['Typescript', 'GoLang', 'Java'];
var lang1 = myFaveLanguage[0], lang2 = myFaveLanguage[1], lang3 = myFaveLanguage[2];
console.log('1st lang -- ', lang1);
console.log('2nd lang -- ', lang2);
console.log('3rd lang -- ', lang3);
// destructuring object
var demoObj = {
    userName: 'Efrat',
    occupation: 'Software Engineer'
};
var userName = demoObj.userName, occupation = demoObj.occupation;
console.log('userName----', userName);
console.log('occupation----', occupation);
var myname = demoObj.userName, myjob = demoObj.occupation;
console.log('userName----', myname);
console.log('occupation----', myjob);
//# sourceMappingURL=app.js.map