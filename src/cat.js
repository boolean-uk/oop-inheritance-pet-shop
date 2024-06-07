import { Animal } from "./animal.js";

class Cat extends Animal {
  constructor(name, age, lifespan) {
    super(name, age, lifespan)
  }

  sound() {
    return `${this.name} Say Mioo!`
  }
}



const cat = new Cat('Valdo', '1.5', '12')

console.log(cat.sound())