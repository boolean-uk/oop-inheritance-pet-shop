class PetShop {
  constructor(name, age, lifeExpectancy, breed) {
    this.name = name;
    this._age = age;
    this._lifeExpectancy = lifeExpectancy;
    this._breed = breed;
  }
  sound() {
    return `${this.name} made a sound!`;
  }
  age() {
    return this._age;
  }
  lifeExpectancy() {
    return this._lifeExpectancy;
  }
  breed() {
    return this._breed;
  }
}

class Dog extends PetShop {
  constructor() {
    super("Jack", 12, 15, "German Shepard");
  }
}

class Cat extends PetShop {
  constructor() {
    super("Megan", 5, 14, "Sphinx");
  }
}

class Bird extends PetShop {
  constructor() {
    super("Zema", 24, 5, "Blue tit");
  }
}

class Fish extends PetShop {
  constructor() {
    super("Davi", 2, 3, "Goldfish");
  }
}

module.exports = { PetShop, Dog, Cat, Bird, Fish };
