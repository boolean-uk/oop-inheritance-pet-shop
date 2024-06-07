class Petshop {
    constructor() {
        this.animals = []
        this.dogs = []
        this.cats = []
        this.birds = []
        this.fish = []
    }

    addAnimal(animal) {
        if(animal.getDog()) {
            this.dogs.push(animal)
        }

        if(animal.getCat()) {
            this.cats.push(animal)
        }

        if(animal.getBird()) {
            this.birds.push(animal)
        }

        if(animal.getFish()) {
            this.fish.push(animal)
        }

        this.animals.push(animal)
    }

}

class Animal {
    constructor(name, age, lifespan, sound, type, subType) {
        this.name = name
        this.age = age
        this.lifespan = lifespan
        this.sound = sound
        this.type = type
        this.subType = subType
    }

    makeSound() {
        return `${this.name} said: ${this.sound}`
    }

    getDog() {
        return this.type === 'Dog'
    }

    getCat() {
        return this.type === 'Cat'
    }

    getBird() {
        return this.type === 'Bird'
    }

    getFish() {
        return this.type === 'Fish'
    }
}

class Dog extends Animal {
    constructor(name, age, lifespan, sound, type, subType) {
        super(name, age, lifespan, sound, type, subType)
    }
}

class Cat extends Animal {
    constructor(name, age, lifespan, sound, type, subType) {
        super(name, age, lifespan, sound, type, subType)
    }
}

class Bird extends Animal {
    constructor(name, age, lifespan, sound, type, subType) {
        super(name, age, lifespan, sound, type, subType)
    }
}

class Fish extends Animal {
    constructor(name, age, lifespan, sound, type, subType) {
        super(name, age, lifespan, sound, type, subType)
    }
}

export default Petshop
export { Dog, Cat, Bird, Fish }