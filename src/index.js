export default class PetShop {
    constructor() {
        this.contents = []
    }

    addAnimal(animal){
        if(!animal instanceof Animal) {
            return new Error("Argument must be an Animal")
        }

        this.contents.push(animal)
    }
}

class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    makeSound() {
        return this.sound
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name, age)
        this.sound = 'Bark'
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super(name, age)
        this.sound = 'Meow'
    }
}

class Bird extends Animal {
    constructor(name, age) {
        super(name, age)
        this.sound = 'Chirp'
    }
}

class Fish extends Animal {
    constructor(name, age) {
        super(name, age)
        this.sound = 'Glub'
    }
}

export class LabradorRetriever extends Dog {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = "10-12 years"
    }
}

export class GermanShepherd extends Dog {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = "9-13 years"
    }
}

export class Beagle extends Dog {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = "12-15 years"
    }
}

export class Siamese extends Cat {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = "15-20 years"
    }
}

export class Persian extends Cat {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = "12-17 years"
    }
}

export class MaineCoon extends Cat {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = "13-15 years"
    }
}

export class Budgerigar extends Bird {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = "5-8 years"
    }
}

export class Cockatiel extends Bird {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = "10-15 years"
    }
}

export class AfricanGreyParrot extends Bird {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = "40-60 years"
    }
}

export class Goldfish extends Fish {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = "10-15 years"
    }
}

export class Betta extends Fish {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = "2-5 years"
    }
}

export class Guppy extends Fish {
    constructor(name, age) {
        super(name, age)
        this.expectedLifespan = "2-3 years"
    }
}
