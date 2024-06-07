class PetShop {
    constructor() {
        this.animalsList = []
    }

    addAnimal(animal) {
        this.animalsList.push(animal)
    }
}

class Animal extends PetShop {
    constructor(name, age, expectedLifeSpan, quantity) {
        super()

        if (this.isString(name) && this.isNumber(age, expectedLifeSpan, quantity)) {
            this.name = name
            this.age = age
            this.expectedLifeSpan = expectedLifeSpan
            this.quantity = quantity
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
    constructor(name, age, expectedLifeSpan, quantity) {
        super(name, age, expectedLifeSpan, quantity)
    }
}

class Cat extends Animal {
    constructor(name, age, expectedLifeSpan, quantity) {
        super(name, age, expectedLifeSpan, quantity)
    }
}

class Bird extends Animal {
    constructor(name, age, expectedLifeSpan, quantity) {
        super(name, age, expectedLifeSpan, quantity)
    }
}

class Fish extends Animal {
    constructor(name, age, expectedLifeSpan, quantity) {
        super(name, age, expectedLifeSpan, quantity)
    }
}

class Labrador extends Dog {
    constructor(name, age, expectedLifeSpan, quantity) {
        super(name, age, expectedLifeSpan, quantity)
        this.stockLimit = 5
        
        if (quantity > this.stockLimit) {
            throw new Error(`This animal has an stock of ${this.stockLimit}, can not choose more than its limit`)
        }
    }
}

class GermanShepherd extends Dog {
    constructor(name, age, expectedLifeSpan, quantity) {
        super(name, age, expectedLifeSpan, quantity)
        this.stockLimit = 8
        
        if (quantity > this.stockLimit) {
            throw new Error(`This animal has an stock of ${this.stockLimit}, can not choose more than its limit`)
        }
    }
}

class Siamese extends Cat {
    constructor(name, age, expectedLifeSpan, quantity) {
        super(name, age, expectedLifeSpan, quantity)
        this.stockLimit = 7
        
        if (quantity > this.stockLimit) {
            throw new Error(`This animal has an stock of ${this.stockLimit}, can not choose more than its limit`)
        }
    }
}

class MaineCoon extends Cat {
    constructor(name, age, expectedLifeSpan, quantity) {
        super(name, age, expectedLifeSpan, quantity)
        this.stockLimit = 4
        
        if (quantity > this.stockLimit) {
            throw new Error(`This animal has an stock of ${this.stockLimit}, can not choose more than its limit`)
        }
    }
}

class Budgerigar extends Bird {
    constructor(name, age, expectedLifeSpan, quantity) {
        super(name, age, expectedLifeSpan, quantity)
        this.stockLimit = 5
        
        if (quantity > this.stockLimit) {
            throw new Error(`This animal has an stock of ${this.stockLimit}, can not choose more than its limit`)
        }
    }
}

class Parrot extends Bird {
    constructor(name, age, expectedLifeSpan, quantity) {
        super(name, age, expectedLifeSpan, quantity)
        this.stockLimit = 2
        
        if (quantity > this.stockLimit) {
            throw new Error(`This animal has an stock of ${this.stockLimit}, can not choose more than its limit`)
        }
    }
}

class Betta extends Fish {
    constructor(name, age, expectedLifeSpan, quantity) {
        super(name, age, expectedLifeSpan, quantity)
        this.stockLimit = 6

        if (quantity > this.stockLimit) {
            throw new Error(`This animal has an stock of ${this.stockLimit}, can not choose more than its limit`)
        }
    }
}

class NeonTetra extends Fish {
    constructor(name, age, expectedLifeSpan, quantity) {
        super(name, age, expectedLifeSpan, quantity)
        this.stockLimit = 3

        if (quantity > this.stockLimit) {
            throw new Error(`This animal has an stock of ${this.stockLimit}, can not choose more than its limit`)
        }
    }
}

export { Labrador, GermanShepherd, Siamese, MaineCoon, Budgerigar, Parrot, Betta, NeonTetra }
export default PetShop
