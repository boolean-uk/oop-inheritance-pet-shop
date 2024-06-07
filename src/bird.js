import { Animal } from "./animal.js";

class Bird extends Animal {
  constructor(name, age, lifespan) {
    super(name, age, lifespan)
  }

  sound() {
    return `${this.name} Say tweet!`
  }
}

export { Bird }