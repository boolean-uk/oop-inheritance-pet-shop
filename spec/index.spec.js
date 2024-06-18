const Dog = require('../Dog')


describe('PetShop', ()  => {
    let PetShop

    beforeEach(  () => {
        PetShop = new PetShop()
    })
    it ('should add and list animals', () => {
        const dog = new Dog ('Rex', 2, 13)


        PetShop.addAnimal(dog)


        const animals = petShop.listAnimals()
        expect(animals.length).toBe(4)
        expect(animals).toContain(dog)
    })
})