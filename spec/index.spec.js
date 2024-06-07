import { Animal } from "../src/animal.js"
import { Dog } from "../src/dog.js"
import { Cat } from "../src/cat.js"
import { Bird } from "../src/bird.js"
import { PetShop } from "../src/petshop.js"

describe('Animal', () => {
  let animal

  beforeEach(() =>{
    animal = new Animal()
  })

  it('should exist:',() => {
    expect(animal).toBeInstanceOf(Animal)
  })
})

describe('Dog', () => {
  let myDog

  beforeEach(() => {
    myDog = new Dog('Pilar', 6.5, 14)
  })

  it('should exist', () => {
    expect(myDog).toBeInstanceOf(Dog)
  })

  it('should make the sound', () => {
    expect(myDog.sound()).toBe('Pilar Say Woof!')
  })
})

describe('Cat', () => {
  let myCat

  beforeEach(() => {
    myCat = new Cat('Mino', 1, 10)
  })

  it('should exist', () => {
    expect(myCat).toBeInstanceOf(Cat)
  })

  it('should make the sound', () => {
    expect(myCat.sound()).toBe('Mino Say Mioo!')
  })
})

describe('Bird', () => {
  let myBird

  beforeEach(() => {
    myBird = new Bird('Mina', 1, 10)
  })

  it('should exist', () => {
    expect(myBird).toBeInstanceOf(Bird)
  })

  it('should make the sound', () => {
    expect(myBird.sound()).toBe('Mina Say tweet!')
  })
})

describe('Petshop', () => {
  let myPetShop
  let myDog
  let myCat
  let myBird
  beforeEach(() => {
    myPetShop = new PetShop() 
    myDog = new Dog('Pilar', 6.5, 14)
    myCat = new Cat('Mino', 1, 10)
    myBird = new Bird('Mina', 1, 10)
  })

  it('should exist', () => {
    expect(myPetShop).toBeInstanceOf(PetShop)
  })

  it('should add a dog the dogList', () => {
    myPetShop.addDog(myDog)
    expect(myPetShop.dogList.length).toBe(1)
  })

  it('should add a cat the catList', () => {
    myPetShop.addCat(myCat)
    expect(myPetShop.catList.length).toBe(1)
  })

  it('should add a bird the birdList', () => {
    myPetShop.addBird(myBird)
    expect(myPetShop.birdList.length).toBe(1)
  })

  it('should remove a pet from the List', () => {
    myPetShop.addBird(myBird)

    const result1 = myPetShop.removeAnimal(myCat)

    expect(result1).toBe(`The Mino dose not exist!`)
    expect(myPetShop.petList.length).toBe(1)

    const result2 = myPetShop.removeAnimal(myBird)
    expect(result2).toBe('Bird removed from the bird list!')
  })
})