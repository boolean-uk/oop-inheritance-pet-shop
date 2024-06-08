import Petshop, { Dog, Cat, Bird, Fish } from "../src/index.js";

describe('Petshop', () => {
    let petshop
    let dog
    let cat
    let bird
    let fish

    beforeEach(() => {
        petshop = new Petshop([{type: 'dog', limit: 3}, {type: 'cat', limit: 6}, {type: 'bird', limit: 4}, {type: 'fish', limit: 8}])
        dog = new Dog('Zuko', 4, 14, 'woof', 'Dog', 'Welsh cardigan corgi')
        cat = new Cat('Feline', 8, 17, 'miauw', 'Cat', 'British shorthair')
        bird = new Bird('Birdo', 6, 20, 'chirp', 'Bird', 'Canary')
        fish = new Fish('Nemo', 1, 4, 'blub', 'Fish', 'Clownfish', 3)
    })

    it('should exist', () => {
        expect(petshop).toBeInstanceOf(Petshop)
        expect(petshop.animals.length).toBe(0)
    })

    it('should be able to add a new animal to the shop', () => {
        petshop.addAnimal(dog)
        petshop.addAnimal(cat)
        petshop.addAnimal(bird)
        petshop.addAnimal(fish)

        expect(petshop.animals.length).toBe(4)
        expect(petshop.animals[0].name).toBe('Zuko')
        expect(petshop.animals[0].age).toBe(4)
        expect(petshop.animals[0].lifespan).toBe(14)
        expect(petshop.animals[0].sound).toBe('woof')

        expect(petshop.animals[1].name).toBe('Feline')

        expect(petshop.animals[2].name).toBe('Birdo')

        expect(petshop.animals[3].name).toBe('Nemo')
    })

    it('animal should be able to make a sound', () => {
        petshop.addAnimal(dog)
        petshop.addAnimal(cat)
        petshop.addAnimal(bird)
        petshop.addAnimal(fish)

        expect(dog.makeSound()).toBe('Zuko said: woof')
        expect(cat.makeSound()).toBe('Feline said: miauw')
        expect(bird.makeSound()).toBe('Birdo said: chirp')
        expect(fish.makeSound()).toBe('Nemo said: blub')
    })

    it('should not be able to add more dogs than the limit allows', () => {
        petshop.addAnimal(dog)
        petshop.addAnimal(dog)
        petshop.addAnimal(dog)

        expect(petshop.animals.length).toBe(3)
        expect(petshop.stock.dog).toBe(3)

        expect(() => petshop.addAnimal(dog)).toThrow('you have reached the max number of animals for this type')
        expect(petshop.animals.length).toBe(3)
        expect(petshop.stock.dog).toBe(3)
    })

    it('should not be able to add more cats than the limit allows', () => {
        petshop.addAnimal(cat)
        petshop.addAnimal(cat)
        petshop.addAnimal(cat)
        petshop.addAnimal(cat)
        petshop.addAnimal(cat)
        petshop.addAnimal(cat)

        expect(petshop.animals.length).toBe(6)
        expect(petshop.stock.cat).toBe(6)

        expect(() => petshop.addAnimal(cat)).toThrow('you have reached the max number of animals for this type')
        expect(petshop.animals.length).toBe(6)
        expect(petshop.stock.cat).toBe(6)
    })

    it('should not be able to add more birds than the limit allows', () => {
        petshop.addAnimal(bird)
        petshop.addAnimal(bird)
        petshop.addAnimal(bird)
        petshop.addAnimal(bird)

        expect(petshop.animals.length).toBe(4)
        expect(petshop.stock.bird).toBe(4)

        expect(() => petshop.addAnimal(bird)).toThrow('you have reached the max number of animals for this type')
        expect(petshop.animals.length).toBe(4)
        expect(petshop.stock.bird).toBe(4)
    })

    it('should not be able to add more fish than the limit allows', () => {
        petshop.addAnimal(fish)
        petshop.addAnimal(fish)
        petshop.addAnimal(fish)
        petshop.addAnimal(fish)
        petshop.addAnimal(fish)
        petshop.addAnimal(fish)
        petshop.addAnimal(fish)
        petshop.addAnimal(fish)

        expect(petshop.animals.length).toBe(8)
        expect(petshop.stock.fish).toBe(8)

        expect(() => petshop.addAnimal(fish)).toThrow('you have reached the max number of animals for this type')
        expect(petshop.animals.length).toBe(8)
        expect(petshop.stock.fish).toBe(8)
    })
})