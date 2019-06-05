type BankAccount = {money: number, deposit: (value: number) => number | void}
let bankAcc: BankAccount = {
  money: 2000,
  deposit: function(value) {
    this.money += value;
  }
}

type Identity = {name: string, bankAccount: BankAccount, hobbies: string[]}

let mySelf: Identity = {
  name: 'Efrat',
  bankAccount: bankAcc,
  hobbies: ['Programming', 'Travelling']
}
mySelf.bankAccount.deposit(3000)
console.log(mySelf)