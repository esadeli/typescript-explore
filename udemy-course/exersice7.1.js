"use strict";
// Interface typescript
function greetPerson(person) {
    console.log('Hello, ', person.firstName);
}
function changeName(person) {
    person.firstName = 'Bear';
}
var guy = {
    firstName: 'Fox',
    type: 'Mammal',
    greet: function (lastName) {
        console.log("Hi! " + this.firstName + " " + lastName + " !");
    }
};
// greetPerson({firstName: 'Tiger',age: 21});
greetPerson(guy);
guy.greet('Hunt');
changeName(guy);
greetPerson(guy);
guy.greet('Hat');
// class with interface
var Guy = /** @class */ (function () {
    function Guy() {
        this.firstName = 'Default firstName';
        this.lastName = 'Default lastName';
    }
    Guy.prototype.greet = function (lastName) {
        console.log("Hi! " + this.firstName + " " + lastName + " !");
    };
    ;
    return Guy;
}());
var newGuy = new Guy();
newGuy.firstName = 'Ali';
greetPerson(newGuy);
newGuy.lastName = 'Baba';
newGuy.greet(newGuy.lastName);
var doubleFunc = function (val1, val2) {
    return (val1 + val2) * 3;
};
console.log(doubleFunc(3, 4));
var newGuy2 = {
    firstName: 'Sonic',
    age: 12
};
console.log(newGuy2);
//# sourceMappingURL=exersice7.1.js.map