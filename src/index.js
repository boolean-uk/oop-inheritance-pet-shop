class Petshop {
    constructor() {
        this.animals = []
    }

    addAnimal(animal) {
        this.animals.push(animal)
    }

}

class Animal {
    constructor(name, age, lifespan, sound) {
        this.name = name
        this.age = age
        this.lifespan = lifespan
        this.sound = sound
    }

    makeSound() {
        return `${this.name} said: ${this.sound}`
    }
}

class Dog extends Animal {
    constructor(name, age, lifespan, sound) {
        super(name, age, lifespan, sound)
    }
}

class Cat extends Animal {
    constructor(name, age, lifespan, sound) {
        super(name, age, lifespan, sound)
    }
}

class Bird extends Animal {
    constructor(name, age, lifespan, sound) {
        super(name, age, lifespan, sound)
    }
}

class Fish extends Animal {
    constructor(name, age, lifespan, sound) {
        super(name, age, lifespan, sound)
    }
}

export default Petshop
export { Dog, Cat, Bird, Fish }