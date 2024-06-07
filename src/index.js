class PetShop {
    constructor() {
        this.animals = []
    }

    add(animal) {
        return this.animals.push(animal)
    }

    remove(animal) {
        if(!this.find(animal)) {
            throw  `sorry ${animal.name} was not found in this store`
        }
        const index = this.animals.indexOf(animal)
        this.animals.splice(index, 1)
        return this.animals
    }

    find(animal) {
        const found = this.animals.find((a) => a.name === animal.name)
        if(!found) {
            throw  `sorry ${animal.name} was not found in this store`
        }
        return found
    }
}

class Animal {
    constructor(name, age, lifespan, sound) {
        this.name = name
        this.age = age
        this.lifespan = lifespan
        this.sound = sound
    }

    getAnimal() {
        return `name: ${this.name}, age: ${this.age}, lifespan: ${this.lifespan}, sound: ${this.sound}`
    }

    getLifespan() {
        return `${this.name} will live for ${this.lifespan} years`
    }
}

class Dog extends Animal {
    constructor(name, age, lifespan, sound, breed) {
        super(name, age, lifespan, sound)
        this.breed = breed
    }

    getBreed() {
        return `${this.name} is a ${this.breed}`
    }
}

class Cat extends Animal {
    constructor(name, age, lifespan, sound, breed) {
        super(name, age, lifespan, sound, breed)
        this.breed = breed
    }

    getBreed() {
        return `${this.name} is a ${this.breed}`
    }
}

class Bird extends Animal {
    constructor(name, age, lifespan, sound, breed) {
        super(name, age, lifespan, sound)
        this.breed = breed
    }

    getBreed() {
        return `${this.name} is a ${this.breed}`
    }
}

class Fish extends Animal {
    constructor(name, age, lifespan, sound, breed) {
        super(name, age, lifespan, sound)
        this.breed = breed
    }

    getBreed() {
        return `${this.name} is a ${this.breed}`
    }
}

const shop = new PetShop()
const dave = new Dog('Dave', 4, 15, 'woof','cocker spaniel')
const pippen = new Cat('Pippen', 5, 18, 'yes', 'sokoke')

shop.add(dave)
shop.add(pippen)


