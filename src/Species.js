class Species {
    constructor(speciesName, sound, lifespan) {
        this.speciesName = speciesName
        this.sound = sound
        this.lifespan = lifespan
        this.speciesInCart = 0
    }

    makeSound() {
        return this.sound
    }
}

class Fish extends Species {
    constructor(speciesName, sound, lifespan, breedName, price, age) {
        super(speciesName, sound, lifespan)
        this.breedName = breedName
        this.price = price
        this.age = age
        this.breedInCart = 0
    }
}

const greatWhiteShark = new Fish('fish', 'CHOMP', 50, 'great white shark', 2000, 24)

console.log(greatWhiteShark.makeSound())

export { Fish }


