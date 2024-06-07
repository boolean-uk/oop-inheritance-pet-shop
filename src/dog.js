import { Animal } from "./animal.js";

class Dog extends Animal {
  constructor(name, age, lifespan) {
    super(name, age, lifespan)
  }

  sound() {
    return `${this.name} Say Woof!`
  }
}


const animal = new Animal('Pillar', 6.5, '12')
// console.log(animal.sound())

const dog = new Dog('Valdo', '1.5', '12')

console.log(dog.sound())