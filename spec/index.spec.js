import { Animal, Dog, Cat, Bird, Fish } from '../src/index.js'

describe('Animal', () => {
    describe('Constructor', () => {
        it('should create an animal object with specified name, age, and expected lifespan', () => {
            const animal = new Animal('Dog', 5, 15)
            expect(animal.name).toBe('Dog')
            expect(animal.age).toBe(5)
            expect(animal.expectedLifespan).toBe(15)
        })
    })

    describe('makeSound', () => {
        it('should throw an error when called directly', () => {
            const animal = new Animal('Dog', 5, 10)
            expect(() => animal.makeSound()).toThrowError('To be overridden by subclasses')
        })
    })

    describe('getters', () => {
        it('should return the name', () => {
            const animal = new Animal('Dog', 5, 10)
            expect(animal.name).toBe('Dog')
        })

        it('should return the age', () => {
            const animal = new Animal('Dog', 5, 10)
            expect(animal.age).toBe(5)
        })

        it('should return the expected lifespan', () => {
            const animal = new Animal('Dog', 5, 15)
            expect(animal.expectedLifespan).toBe(15)
        })
    })
})

describe('Animal Inheritance', () => {
    it('Dog should make Woof sound', () => {
        const dog = new Dog('Ollie', 12, 15)
        expect(dog.makeSound()).toBe('Woof!')
    })

    it('Cat should make Meow sound', () => {
        const cat = new Cat('Daisy', 2, 15)
        expect(cat.makeSound()).toBe('Meow!')
    })

    it('Bird should make Tweet sound', () => {
        const bird = new Bird('George', 12, 25)
        expect(bird.makeSound()).toBe('Tweet!')
    })

    it('Fish should make Blub sound', () => {
        const fish = new Fish('Nemo', 1, 3)
        expect(fish.makeSound()).toBe('Bark!')
    })
})