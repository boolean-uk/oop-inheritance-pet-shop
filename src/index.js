class PetShop {
    constructor() {
        this.animalsList = []
    }

    addAnimal(animal) {
        this.animalsList.push(animal)
    }
}

class Animal extends PetShop {
    constructor(name, age, expectedLifeSpan) {
        super()

        if (this.isString(name) && this.isNumber(age, expectedLifeSpan)) {
            this.name = name
            this.age = age
            this.expectedLifeSpan = expectedLifeSpan
        } else {
            throw new Error('Animal properties not provided correctly')
        }
    }

    isString(name) {
        return typeof name === 'string' && name !== ''
    }

    isNumber(...props) {
        return props.every(prop => typeof prop === 'number' && prop > 0)
    }

    makeSound() {
        return `${this.name} made a sound`
    }
}

class Dog extends Animal {
    constructor(name, age, expectedLifeSpan) {
        super(name, age, expectedLifeSpan)
    }
}

class Cat extends Animal {
    constructor(name, age, expectedLifeSpan) {
        super(name, age, expectedLifeSpan)
    }
}

class Bird extends Animal {
    constructor(name, age, expectedLifeSpan) {
        super(name, age, expectedLifeSpan)
    }
}

class Fish extends Animal {
    constructor(name, age, expectedLifeSpan) {
        super(name, age, expectedLifeSpan)
    }
}

export { Dog, Cat, Bird, Fish }
export default PetShop
