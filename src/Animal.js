class Animal {
    constructor(breed, lifespan) {
       this.breed = breed
       this.lifespan = lifespan
    }

    makeSound() {
        return this.sound
    }
}

class Dog extends Animal {
    constructor(breed, lifespan, sound, price, age) {
        super(breed, lifespan)
        this.sound = sound
        this.price = price
        this.age = age
    }
}

class Cat extends Animal {
    constructor(breed, lifespan, sound, price, age) {
        super(breed, lifespan)
        this.sound = sound
        this.price = price
        this.age = age
    }
}

class Fish extends Animal {
    constructor(breed, lifespan, sound, price, age) {
        super(breed, lifespan)
        this.sound = sound
        this.price = price
        this.age = age
    }
}

class Bird extends Animal {
    constructor(breed, lifespan, sound, price, age) {
        super(breed, lifespan)
        this.sound = sound
        this.price = price
        this.age = age
    }
}





export { Animal, Dog, Cat, Fish, Bird }