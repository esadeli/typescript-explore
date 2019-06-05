class Person {
  name: string;
  private type: string ='big';
  protected age: number = 27;

  constructor(name: string, public username: string){
    this.name = name
  }

  // printAge () {
  //   console.log(this.age)
  // }

  printAge (type: string) {
    console.log(this.age)
    this.setType(type)
  }

  private setType (type: string) {
    this.type = type
    console.log(this.type)
  }
}

let person = new Person('Efrat', 'esadeli');
console.log(person)

// person.printAge();
// person.setType('Software Developer');

person.printAge('Entrepreneur')

// Inheritance
class Citizen extends Person {
  // name = 'Charis';
  constructor (username: string) {
    super("Charis", username)
    // this.age = 90
  }
  setAge(age: number) {
    this.age = age
  }
}
// let citizen = new Citizen('Bob','Plumber')
// console.log(citizen)

let citizen2 = new Citizen('cahris77');
citizen2.printAge('Carpenter');
citizen2.setAge(40);
console.log(citizen2)

// getter and setter
class Plant {
  private _species: string = 'Spx'

  get species() {
    return this._species
  }

  set species(val: string){
    if(val.length <4) {
      this._species = 'Spxs'
    } else {
      this._species = val
    }
  }
}

let plant = new Plant()
console.log(plant.species) // spx
plant.species = 'ABC'
console.log(plant.species) // Spxs
plant.species = 'Cactus'
console.log(plant.species) // Cactus

// Static Properties and Method
class Helpers {
  private static PI: number = 3.14;
  static getArea(radius: number) {
    return this.PI*radius;
  }
}

// console.log(Helpers.PI);
console.log(Helpers.getArea(2));


// abstract class
abstract class Animal {
  name: string = 'Animal';
  type: string = 'Type Default';
  constructor (name: string, type: string) {
    this.name = name;
    this.type = type;
  }
  abstract sound (val: string): void
  identity () {
    return `Hi this is ${this.name} I am from ${this.type} type`
  }
}

// let animal = new Animal('Dog','Mammal') abstract class can not be instantiated
class Dog extends Animal {
  private _sound: string = 'Default sound'
  public size: string
  constructor (size: string) {
    super('Dog', 'Mammal')
    this.size = size
  }
  sound (sound: string) {
    this._sound = sound
  }

  identity () {
    return `Hi this is ${this.name} I am from ${this.type} type and I am on ${this.size} size ${this._sound}!!!`
  }
}

let blackie = new Dog('medium')
console.log(blackie)
console.log(blackie.identity())
blackie.sound('woof')
console.log(blackie)
console.log(blackie.identity())

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
class ExSingleton {
  private static instance: ExSingleton
  public readonly name: string
  
  private constructor (name: string) {
    this.name = name
  }
  static getInstance () {
    if(!ExSingleton.instance) {
      ExSingleton.instance = new ExSingleton ('New Singleton')
    }
    return ExSingleton.instance
  }
}

// let exSingleton = new ExSingleton()
// console.log(exSingleton)
let exSingleton2 = ExSingleton.getInstance()
console.log(exSingleton2)
console.log('this is name ',exSingleton2.name);
// exSingleton2.name = 'Changed Singleton';
console.log('changed name ',exSingleton2.name);