class Animal {
    constructor(name, age, lifespan, noise) {
        this.name = name
        this.age = age
        this.lifespan = lifespan
        this.noise = noise
    }
    speak() {
        console.log(this.noise)
    }
}

class Dog extends Animal {
    constructor(name, age, lifespan, noise) {
        super(name, age, lifespan, noise)
        this.species = "Dog"
    }
}

class Chuwawa extends Dog {
    constructor(name, age, lifespan, noise) {
        super(name, age, lifespan, noise)
        this.breed = "Chuwawa"
    }
}

class Collie extends Dog {
    constructor(name, age, lifespan, noise) {
        super(name, age, lifespan, noise)
        this.breed = "Collie"
    }
}

class Cat extends Animal {
    constructor(name, age, lifespan, noise) {
        super(name, age, lifespan, noise)
        this.species = "Cat"
    }
}

class Ginger extends Cat {
    constructor(name, age, lifespan, noise) {
        super(name, age, lifespan, noise)
        this.breed = "Ginger cat"
    }
}

class Black extends Cat {
    constructor(name, age, lifespan, noise) {
        super(name, age, lifespan, noise)
        this.breed = "Black cat"
    }
}

class Bird extends Animal {
    constructor(name, age, lifespan, noise) {
        super(name, age, lifespan, noise)
        this.species = "Bird"
    }
}

class Pigeon extends Bird {
    constructor(name, age, lifespan, noise) {
        super(name, age, lifespan, noise)
        this.breed = "Pigeon"
    }
}

class Raven extends Bird {
    constructor(name, age, lifespan, noise) {
        super(name, age, lifespan, noise)
        this.breed = "Raven"
    }
}

class Fish extends Animal {
    constructor(name, age, lifespan, noise) {
        super(name, age, lifespan, noise)
        this.species = "Fish"
    }
}

class GoldFish extends Fish {
    constructor(name, age, lifespan, noise) {
        super(name, age, lifespan, noise)
        this.breed = "GoldFish"
    }
}

class Rainbow extends Fish {
    constructor(name, age, lifespan, noise) {
        super(name, age, lifespan, noise)
        this.breed = "Rainbow Fish"
    }
}

class PetShop {
    constructor() {
        this.animals = []
    }
    getAnimals() {
        return this.animals
    }
    addAnimal(animal) {
        this.animals.push(animal)
    }
}

const test = new Chuwawa("Joan", 2, 45, "Reeeeee")
console.log(test)

export default Animal
export { Dog, Chuwawa, PetShop }