export default class PetShop {
    #contents
    #animalTypeLimits
    #animalTypeStock
    
    constructor() {
        this.#contents = []
        this.#animalTypeLimits = {
            dog: 4,
            bird: 7,
            cat: 3,
            fish: 20,
        }
        this.#animalTypeStock ={
            dog: 0,
            bird: 0,
            cat: 0,
            fish: 0,
        }
    }

    get contents() {
        return [...this.#contents]
    }

    addAnimal(animal) {
        if (!animal instanceof Animal) {
            throw new Error('Argument must be an Animal')
        }

        const isAtCapacity = this.#animalTypeStock[animal.animalType.toLowerCase()] === this.#animalTypeLimits[animal.animalType.toLowerCase()]

        if(isAtCapacity) {
            throw new Error('Pet shop at capacity for this class of animal')
        }

        this.#contents.push(animal)

        this.#animalTypeStock[animal.animalType.toLowerCase()]++
    }

}

class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    makeSound() {
        if (this.sound) {
            return this.sound
        }

        return "Silence"
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name, age)
        this.sound = 'Bark'
        this.animalType = 'Dog'
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super(name, age)
        this.sound = 'Meow'
        this.animalType = 'Cat'
    }
}

class Bird extends Animal {
    constructor(name, age) {
        super(name, age)
        this.sound = 'Chirp'
        this.animalType = 'Bird'
    }
}

class Fish extends Animal {
    constructor(name, age) {
        super(name, age)
        this.sound = 'Glub'
        this.animalType = 'Fish'
    }
}

export class LabradorRetriever extends Dog {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = '10-12 years'
    }
}

export class GermanShepherd extends Dog {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = '9-13 years'
    }
}

export class Beagle extends Dog {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = '12-15 years'
    }
}

export class Siamese extends Cat {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = '15-20 years'
    }
}

export class Persian extends Cat {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = '12-17 years'
    }
}

export class MaineCoon extends Cat {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = '13-15 years'
    }
}

export class Budgerigar extends Bird {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = '5-8 years'
    }
}

export class Cockatiel extends Bird {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = '10-15 years'
    }
}

export class AfricanGreyParrot extends Bird {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = '40-60 years'
    }
}

export class Goldfish extends Fish {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = '10-15 years'
    }
}

export class Betta extends Fish {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = '2-5 years'
    }
}

export class Guppy extends Fish {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = '2-3 years'
    }
}
