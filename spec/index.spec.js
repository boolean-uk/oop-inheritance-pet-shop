import Animal, { Chuwawa, Dog, PetShop } from "../src/index.js";

describe("Animal", () => {
    it("should exist", () => {
        const animal = new Animal("John", 23, 65, "ahh my back")
        expect(animal).toBeInstanceOf(Animal)
    })
    it("should be able to make a noise", () => {
        const animalTwo = new Animal("John", 23, 65, "ahh my back")
        expect(animalTwo.speak()).toEqual(console.log("ahh my back"))
    })
})

describe("Dog", () => {
    it("should have species of dog", () => {
        const dog = new Dog("John", 23, 65, "ahh my back")
        expect(dog.species).toEqual("Dog")
    })
})

describe("Chuwawa", () => {
    it("should have a breed of Chuwawa", () => {
        const chuwawa = new Chuwawa("Joan", 2, 45, "Reeeeee")
        expect(chuwawa.breed).toEqual("Chuwawa")
    })
})

describe("PetShop", () => {
    let petShop
    beforeEach(() => {
        petShop = new PetShop()
    })
    it("should exist", () => {
        expect(petShop).toBeInstanceOf(PetShop)
    })
    it("should be able to return a list of current animals in the shop", () => {
        expect(petShop.getAnimals()).toEqual([])
    })
    it("should be able to add an animal to the shop", () => {
        petShop.addAnimal(new Chuwawa("Joan", 2, 45, "Reeeeee"))
        const animalsInShop = petShop.getAnimals()[0]
        expect(animalsInShop.name).toEqual("Joan")
        expect(animalsInShop.age).toEqual(2)
        expect(animalsInShop.lifespan).toEqual(45)
        expect(animalsInShop.noise).toEqual("Reeeeee")
    })
})