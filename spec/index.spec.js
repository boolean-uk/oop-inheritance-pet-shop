import Petshop, { Dog, Cat, Bird, Fish } from "../src/index.js";

describe('Petshop', () => {
    let petshop
    let dog
    let cat
    let bird
    let fish

    beforeEach(() => {
        petshop = new Petshop()
        dog = new Dog('Zuko', 4, 14, 'woof', 'Dog', 'Welsh cardigan corgi')
        cat = new Cat('Feline', 8, 17, 'miauw', 'Cat', 'British shorthair')
        bird = new Bird('Birdo', 6, 20, 'chirp', 'Bird', 'Canary')
        fish = new Fish('Nemo', 1, 4, 'blub', 'Fish', 'Clownfish')
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
        expect(petshop.animals[0].type).toBe('Dog')
        expect(petshop.animals[0].subType).toBe('Welsh cardigan corgi')

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

    it('should be able to differentiate between animal types', () => {
        petshop.addAnimal(dog)
        petshop.addAnimal(cat)
        petshop.addAnimal(bird)
        petshop.addAnimal(fish)

        expect(petshop.dogs.length).toBe(1)
        expect(petshop.dogs[0].name).toBe('Zuko')

        expect(petshop.cats[0].name).toBe('Feline')

        expect(petshop.birds[0].name).toBe('Birdo')

        expect(petshop.fish[0].name).toBe('Nemo')
    })
})