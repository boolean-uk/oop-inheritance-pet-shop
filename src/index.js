class Petshop {
    constructor() {
        this.animals = []

        this.dogs = []
        this.dogStock = 0
        this.dogsLimit = 3

        this.cats = []
        this.catStock = 0
        this.catsLimit = 6

        this.birds = []
        this.birdStock = 0
        this.birdsLimit = 4

        this.fish = []
        this.fishStock = 0
        this.fishLimit = 8
    }

    addAnimal(animal) {
        if (
            this.dogStock === this.dogsLimit || 
            this.catStock === this.catsLimit || 
            this.birdStock === this.birdsLimit || 
            this.fishStock === this.fishLimit
        ) {
            throw 'you have reached the max number of animals for this type'
        }

        if(animal.getDog()) {
            this.dogStock++
            this.dogs.push(animal)
            this.animals.push(animal)
        }

        if(animal.getCat()) {
            this.catStock++
            this.cats.push(animal)
            this.animals.push(animal)
        }

        if(animal.getBird()) {
            this.birdStock++
            this.birds.push(animal)
            this.animals.push(animal)
        }

        if(animal.getFish()) {
            this.fishStock++
            this.fish.push(animal)
            this.animals.push(animal)
        }
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