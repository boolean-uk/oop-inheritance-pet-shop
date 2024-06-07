import PetShop, { Dog, Cat, Bird, Fish } from "../src/index.js";

describe('Pet Shop', () => {
    let petShop

    beforeEach(() => {
        petShop = new PetShop()
    })

    it('should be able to stock various different types of animals', () => {
        const newDog = new Dog('sully', 3, 13)
        petShop.addAnimal(newDog)

        const newCat = new Cat('lenny', 6, 18)
        petShop.addAnimal(newCat)

        const newBird = new Bird('ian', 4, 20)
        petShop.addAnimal(newBird)

        const newFish = new Fish('marlin', 1, 5)
        petShop.addAnimal(newFish)

        expect(petShop.animalsList).toEqual([
            new Dog(
               'sully', 
               3, 
               13 
            ),
            new Cat(
                'lenny', 
                6, 
                18
            ),
            new Bird(
                'ian', 
                4, 
                20
            ),
            new Fish(
                'marlin', 
                1, 
                5
            )
        ])
    })

    it('should be able to make sound for each of the animals', () => {
        const newDog = new Dog('sully', 3, 13)
        
        expect(newDog.makeSound()).toBe('sully made a sound')
    })

    it('should throw an error if animal properties not filled in correctly', () => {
        expect(() => new Dog('', 3, 13)).toThrowError('Animal properties not provided correctly')
    })
})
