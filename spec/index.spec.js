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
})