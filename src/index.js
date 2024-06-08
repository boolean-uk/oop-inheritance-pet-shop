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
    constructor(name, age, lifespan) {
        this.name = name
        this.age = age
        this.lifespan = lifespan
    }

    makeSound() {
        return `${this.name} said: ${this.sound}`
    }
}

class Dog extends Animal {
    constructor(name, age, lifespan) {
        super(name, age, lifespan)
        this.type = 'dog'
        this.sound = 'woof'
    }
}

class Cat extends Animal {
    constructor(name, age, lifespan) {
        super(name, age, lifespan)
        this.type = 'cat'
        this.sound = 'miauw'
    }
}

class Bird extends Animal {
    constructor(name, age, lifespan) {
        super(name, age, lifespan)
        this.type = 'bird'
        this.sound = 'chirp'
    }
}

class Fish extends Animal {
    constructor(name, age, lifespan) {
        super(name, age, lifespan)
        this.type = 'fish'
        this.sound = 'blub'
    }
}


export default Petshop
export { Dog, Cat, Bird, Fish }