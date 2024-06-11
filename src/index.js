export default class PetShop {
construct(type) {
    this.animalTypeStockLimit = {}
    this.animals = []
  }
}

export class AnimalType {
    constructor(type, limit) {
      (this.type = type), (this.limit = limit);
    }
  }
  
export class Animal {
    name;
    age;
    xlifespan;
    sound;
  
    constructor(name, age, xlifespan, sound) {
        this.name = name
        this.age = age
        this.xlifespan = xlifespan
        this.sound = sound
    }
}
export class Dog extends Animal {
    constructor(name, age, xlifespan, sound) {
      super(name, age, xlifespan, sound);
    }
  }
  export class Cat extends Animal {
    constructor(name, age, xlifespan, sound) {
      super(name, age, xlifespan, sound);
    }
  }
  export class Bird extends Animal {
    constructor(name, age, xlifespan, sound) {
      super(name, age, xlifespan, sound);
    }
  }
  export class Fish extends Animal {
    constructor(name, age, xlifespan, sound) {
      super(name, age, xlifespan, sound);
    }
  }
  
  