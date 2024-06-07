import { Bird } from "./bird.js";
import { Cat } from "./cat.js";
import { Dog } from "./dog.js";


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
}

const myDog = new Dog('Pilar', 6.5, 14)
const myCat = new Cat('Garffield', 6.5, 6)
const myBird = new Bird('tweet', 6.5, 3)
const myPetShop = new PetShop()

myPetShop.addDog(myDog)
myPetShop.addBird(myBird)
myPetShop.addCat(myCat)

// console.log('dogs : ', myPetShop.dogList)
// console.log('cats : ', myPetShop.catList)
// console.log('birds : ', myPetShop.birdList)
console.log('all pets : ', myPetShop.petList)