class Animal {
    constructor(name, age, expectedLifespan) {
      this.name = name;
      this.age = age;
      this.expectedLifespan = expectedLifespan;
    }
  
    makeSound() {
      throw new Error("This method should be overridden by subclasses");
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      return "Woof!";
    }
  }
  
  class Cat extends Animal {
    makeSound() {
      return "Meow!";
    }
  }
  
  class Bird extends Animal {
    makeSound() {
      return "Chirp!";
    }
  }
  
  class Fish extends Animal {
    makeSound() {
      return "Blub!";
    }
  }

  class PetShop {
    constructor() {
      this.stock = {
        dogs: [],
        cats: [],
        birds: [],
        fish: []
      };
      this.limits = {
        dogs: 10,
        cats: 10,
        birds: 20,
        fish: 50
      };
    }
  
    setLimit(type, limit) {
      if (this.limits.hasOwnProperty(type)) {
        this.limits[type] = limit;
      } else {
        throw new Error("Unknown animal type");
      }
    }
  
    addAnimal(animal) {
      const type = this._getType(animal);
      if (this.stock[type].length < this.limits[type]) {
        this.stock[type].push(animal);
      } else {
        throw new Error(`Cannot add more ${type}, limit reached`);
      }
    }
  
    getStock() {
      return this.stock;
    }
  
    _getType(animal) {
      if (animal instanceof Dog) return 'dogs';
      if (animal instanceof Cat) return 'cats';
      if (animal instanceof Bird) return 'birds';
      if (animal instanceof Fish) return 'fish';
      throw new Error("Unknown animal type");
    }
  }
  
  module.exports = { Animal, Dog, Cat, Bird, Fish, PetShop };
  