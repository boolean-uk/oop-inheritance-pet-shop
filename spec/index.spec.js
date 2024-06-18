const Dog = require('../src/Dog')
const Cat = require('../src/Cat')
const Fish = require('../src/Fish')
const Bird = require('../src/Bird')
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
        const bird = new Bird('Birdie', 5, 99)

        petShop.addAnimal(dog)
        petShop.addAnimal(cat)
        petShop.addAnimal(fish)
        petShop.addAnimal(bird)

        const animals = petShop.listAnimals()
        expect(animals.length).toBe(4) 
        expect(animals).toContain(dog)
        expect(animals).toContain(cat)
        expect(animals).toContain(fish)
        expect(animals).toContain(bird)
    })
})

describe('Animal Sounds', () => {
    it('should return the correct sound for each animal', () => {
        const dog = new Dog('Rex', 2, 13)
        const cat = new Cat('PussyCat', 3, 17)
        const fish = new Fish('Fishfish', 9,20)
        const bird = new Bird('Birdie', 5, 99)

        expect(dog.makesound()).toBe('woof!')
        expect(cat.makesound()).toBe('Meow Meow')
        expect(fish.makesound()).toBe('fish_sound')
        expect(bird.makesound()).toBe('Chirp')
    })
})
