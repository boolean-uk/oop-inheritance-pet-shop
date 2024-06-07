import { Bird } from "./bird.js";
import { Cat } from "./cat.js";
import { Dog } from "./dog.js";
import { Animal } from "./animal.js";

class PetShop {

  constructor () {
    this.petList = []
    this.dogList = []
    this.catList = []
    this.birdList = []
  }

  addDog(dogClassIntance) {
    if(dogClassIntance instanceof Dog) {
      this.dogList.push(dogClassIntance)
      this.petList.push(dogClassIntance)
    } else {
      return 'You cant add a dog to the dog List'
    }
  }

  addCat(catClassIntance) {
    if(catClassIntance instanceof Cat) {
      this.catList.push(catClassIntance)
      this.petList.push(catClassIntance)
    } else {
      return 'You cant add a cat to the cat List'
    }
  }

  addBird(birdClassIntance) {
    if(birdClassIntance instanceof Bird) {
      this.birdList.push(birdClassIntance)
      this.petList.push(birdClassIntance)
    } else {
      return 'You cant add a bird to the bird List'
    }
  }

  removeAnimal(animal) {

    if (!(animal instanceof Animal)) return `${animal} is not a animal!
    `
    const found = this.petList.find((pet) => {
      return pet.name === animal.name
    })
    if(found === undefined) {
      return `The ${animal.name} dose not exist!`
    }
    this.petList = this.petList.filter((pet) => {
      return pet.name !== animal.name
    })

    if(animal instanceof Dog) {
      this.dogList = this.dogList.filter((pet) => {
        return pet.name !== animal.name
      })
      return 'Dog removed from the dog list!'

    } else if(animal instanceof Cat) {
      this.catList = this.catList.filter((pet) => {
        return pet.name !== animal.name
      })
      return 'Cat removed from the cat list!'

    } else if(animal instanceof Bird) {
      this.birdList = this.birdList.filter((pet) => {
        return pet.name !== animal.name
      })
      return 'Bird removed from the bird list!'
    }
  }
}

export { PetShop }
