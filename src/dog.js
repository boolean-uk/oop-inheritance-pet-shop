import { Animal } from "./animal.js";

class Dog extends Animal {
  constructor(name, age, lifespan) {
    super(name, age, lifespan)
  }

  sound() {
    return `${this.name} Say Woof!`
  }
}

export { Dog }