import PetShop, { Animal, Dog, Cat, Fish, Bird } from "../src/index.js";

describe('Petshop', () => {
    let petshop
    let animal
    beforeEach(() => {
        petshop = new PetShop()
        animal = new Animal()
    })
    it('should add an animal to the list of animals', () => {
        let dave = new Dog('Dave', 4, 15, 'woof','cocker spaniel')
        petshop.add(dave)
        expect(petshop.animals.length).toBe(1)
        expect(petshop.animals[0].name).toBe('Dave')
    })
    it('should find an animal in the list', () => {
        let dave = new Dog('Dave', 4, 15, 'woof','cocker spaniel')
        petshop.add(dave)
        const expected = petshop.find(dave)
        expect(expected).toEqual(dave)
    })
    it('should throw an error message if animal not found', () => {
        expect(() => petshop.find(animal)).toThrow(`sorry ${animal.name} was not found in this store`)
    })
    it('should remove an animal from the list', () => {
        let dave = new Dog('Dave', 4, 15, 'woof','cocker spaniel')
        let pippen = new Cat('Pippen', 5, 18, 'yes', 'sokoke')
        petshop.add(dave)
        petshop.add(pippen)
        petshop.remove(dave)
        expect(petshop.animals.length).toBe(1)
        expect(petshop.animals[0].name).toBe('Pippen')
    })
})