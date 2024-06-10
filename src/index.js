export default class Petshop {
  #id;
  constructor() {
    this.#id = 0;
    this.animals = [];
  }

  addAnimal(animal) {
    this.#id++;
    animal.id = this.#id;
    this.animals.push(animal);
  }

  get(toFind) {
    if (!toFind) return this.animals;
    return this.animals.filter((animal) => animal instanceof toFind);
  }
}

export class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    return `Hi! My name is ${this.name}.`;
  }
}

export class Dog extends Animal {
  constructor(name, age, lifespan) {
    super(name, age);
    this.lifespan = lifespan;
  }
}

export class Rottweiler extends Dog {}

export class Cat extends Animal {
  constructor(name, age, lifespan) {
    super(name, age);
    this.lifespan = lifespan;
  }
}

export class Persian extends Cat {}

export class Bird extends Animal {
  constructor(name, age, lifespan) {
    super(name, age);
    this.lifespan = lifespan;
  }
}

export class Finch extends Bird {}
