import { Animal } from "./animal.js";

class Cat extends Animal {
  constructor(name, age, lifespan) {
    super(name, age, lifespan)
  }

  sound() {
    return `${this.name} Say Mioo!`
  }
}