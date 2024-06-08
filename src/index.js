class Petshop {
    constructor() {
        this.animals = []
        this.stock = {
            dog: 0,
            cat: 0,
            bird: 0,
            fish: 0
        }
        this.typeLimit = {
            dog : 3,
            cat : 6,
            bird : 4,
            fish : 8
        }
    }

    addAnimal(animal) {
        if (this.stock[animal.type] === this.typeLimit[animal.type]) {
            throw 'you have reached the max number of animals for this type'
        }

        this.stock[animal.type]++
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
        this.type = 'dog'
    }
}

class Cat extends Animal {
    constructor(name, age, lifespan, sound) {
        super(name, age, lifespan, sound)
        this.type = 'cat'
    }
}

class Bird extends Animal {
    constructor(name, age, lifespan, sound) {
        super(name, age, lifespan, sound)
        this.type = 'bird'
    }
}

class Fish extends Animal {
    constructor(name, age, lifespan, sound, type) {
        super(name, age, lifespan, sound, type)
        this.type = 'fish'
    }
}


export default Petshop
export { Dog, Cat, Bird, Fish }