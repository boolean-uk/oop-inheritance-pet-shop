class Animal {
    constructor(name, lifespan) {
       this.name = name
       this.lifespan = lifespan
    }

    makeSound() {
        return this.sound
    }
}

class Dog extends Animal {
    constructor(name, lifespan, sound, price, age) {
        super(name, lifespan)
        this.sound = sound
        this.price = price
        this.age = age
    }
}

class Cat extends Animal {
    constructor(name, lifespan, sound, price, age) {
        super(name, lifespan)
        this.sound = sound
        this.price = price
        this.age = age
    }
}

class Fish extends Animal {
    constructor(animalName, lifespan, sound, price, age) {
        super(animalName, lifespan)
        this.sound = sound
        this.price = price
        this.age = age
    }
}

class Bird extends Animal {
    constructor(animalName, lifespan, sound, price, age) {
        super(animalName, lifespan)
        this.sound = sound
        this.price = price
        this.age = age
    }
}





export { Dog, Cat, Fish, Bird }