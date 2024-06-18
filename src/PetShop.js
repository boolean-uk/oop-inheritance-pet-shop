class PetShop {
    constructor() {
        this.animals = []
    }

    addAnimal(animal) {
        this.animals.push(animal)
    }

    listAnimals() {
        return this.animals
    }
}

module.exports = PetShop