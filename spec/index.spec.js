const Dog = require('../src/Dog')
const Cat = require('../src/Cat')
const Fish = require('../src/Fish')
const PetShop = require('../src/PetShop')


describe('PetShop', () => {
    let petShop

    beforeEach(() => {
        petShop = new PetShop()
    })

    it('should add and list animals', () => {
        const dog = new Dog('Rex', 2, 13)
        const cat = new Cat('PussyCat', 3, 17)
        const fish = new Fish('Fishfish', 9, 20)

        petShop.addAnimal(dog)
        petShop.addAnimal(cat)
        petShop.addAnimal(fish)

        const animals = petShop.listAnimals()
        expect(animals.length).toBe(3) 
        expect(animals).toContain(dog)
        expect(animals).toContain(cat)
        expect(animals).toContain(fish)
    })
})

describe('Animal Sounds', () => {
    it('should return the correct sound for each animal', () => {
        const dog = new Dog('Rex', 2, 13)
        const cat = new Cat('PussyCat', 3, 17)
        const fish = new Fish('Fishfish', 9,20)

        expect(dog.makesound()).toBe('woof!')
        expect(cat.makesound()).toBe('Meow Meow')
        expect(fish.makesound()).toBe('fish_sound')
    })
})
