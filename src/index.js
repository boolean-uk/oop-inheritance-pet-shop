class Animal {
    #name
    #age
    #expectedLifespan

    constructor(name, age, expectedLifespan) {
        this.#name = name
        this.#age = age
        this.#expectedLifespan = expectedLifespan
    }

    makeSound() {
        throw new Error("To be overridden by subclasses")
    }

    get name() {
        return this.#name
    }

    get age() {
        return this.#age
    }

    get expectedLifespan() {
        return this.#expectedLifespan
    }

}

class Dog extends Animal {
    constructor(name, age, expectedLifespan) {
        super(name, age, expectedLifespan)
    }

    makeSound() {
        return "Woof!"
    }
}

class Cat extends Animal {
    constructor(name, age, expectedLifespan) {
        super(name, age, expectedLifespan)
    }

    makeSound() {
        return "Meow!"
    }
}

class Bird extends Animal {
    constructor(name, age, expectedLifespan) {
        super(name, age, expectedLifespan)
    }

    makeSound() {
        return "Tweet!"
    }
}

class Fish extends Animal {
    constructor(name, age, expectedLifespan) {
        super(name, age, expectedLifespan)
    }

    makeSound() {
        return "Blub!"
    }
}

class PetShop {
    #animals

    constructor() {
        this.#animals = []
    }

    addAnimal(animal) {
        this.#animals.push(animal)
    }

    removeAnimal(animalName) {
        this.#animals = this.#animals.filter(animal => animal.name !== animalName)
    }

    getAnimalNames() {
        return this.#animals.map(animal => animal.name)
    }

    get animals() {
        return this.#animals
    }
}

export { Animal, Dog, Cat, Bird, Fish, PetShop } 