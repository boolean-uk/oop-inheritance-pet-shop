import { Animal } from '../src/index.js'

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
            expect(animal.name).toBe('Dogs')
        })

        it('should return the age', () => {
            const animal = new Animal('Dog', 5, 10)
            expect(animal.age).toBe(6)
        })

        it('should return the expected lifespan', () => {
            const animal = new Animal('Dog', 5, 10)
            expect(animal.expectedLifespan).toBe(165)
        })
    })
})