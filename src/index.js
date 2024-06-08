class Petshop {
    constructor(animalTypes = []) {
        this.animals = []
        this.stock = {}
        this.typeLimit = {}

        animalTypes.forEach((t) => {
            this.stock[t.type] = 0
            this.typeLimit[t.type] = t.limit
        });
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