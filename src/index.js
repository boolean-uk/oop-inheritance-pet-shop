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

        if (name === undefined || name === null || name.trim() === "")
            throw "name is required";
      
          if (age === undefined || age === NaN || age < 0) throw "age is required";
      
          if (xlifespan === undefined || xlifespan === NaN || xlifespan < 0)
            throw "expected lifespan is required";
      
          if (sound === undefined || sound === null || sound.trim() === "")
            throw "sound is required";
      
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
  
  