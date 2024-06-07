import PetShop, { Labrador, GermanShepherd, Siamese, MaineCoon, Budgerigar, Parrot, Betta, NeonTetra } from "../src/index.js";

describe('Pet Shop', () => {
    let petShop

    beforeEach(() => {
        petShop = new PetShop()
    })

    it('should be able to stock various different types of animals', () => {
        const newLabrador = new Labrador('sully', 3, 13, 2)
        petShop.addAnimal(newLabrador)

        const newSiamese = new Siamese('lenny', 6, 18, 3)
        petShop.addAnimal(newSiamese)

        const newBudgerigar = new Budgerigar('ian', 4, 20, 1)
        petShop.addAnimal(newBudgerigar)

        const newBetta = new Betta('marlin', 1, 5, 4)
        petShop.addAnimal(newBetta)

        expect(petShop.animalsList).toEqual([
            new Labrador(
               'sully', 
               3, 
               13,
               2 
            ),
            new Siamese(
                'lenny', 
                6, 
                18,
                3
            ),
            new Budgerigar(
                'ian', 
                4, 
                20,
                1
            ),
            new Betta(
                'marlin', 
                1, 
                5,
                4
            )
        ])
    })

    it('should be able to make sound for each of the animals', () => {
        const newLabrador = new Labrador('sully', 3, 13, 2)

        expect(newLabrador.makeSound()).toBe('sully made a sound')
    })

    it('should throw an error if animal properties not filled in correctly', () => {
        expect(() => new Labrador('', 3, 13, 2)).toThrowError('Animal properties not provided correctly')
    })

    it('should throw an error if the quantity choosen is more than the stock limit', () => {
        expect(() => new Labrador('sully', 3, 13, 6)).toThrowError('This animal has an stock of 5, can not choose more than its limit')
    })
})
