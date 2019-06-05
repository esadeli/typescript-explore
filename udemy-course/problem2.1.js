"use strict";
var bankAcc = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var mySelf = {
    name: 'Efrat',
    bankAccount: bankAcc,
    hobbies: ['Programming', 'Travelling']
};
mySelf.bankAccount.deposit(3000);
console.log(mySelf);
//# sourceMappingURL=problem2.1.js.map