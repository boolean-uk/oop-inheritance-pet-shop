import { Bird } from "./bird.js";
import { Cat } from "./cat.js";
import { Dog } from "./dog.js";
import { PetShop } from "./petshop.js";

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

console.log(myPetShop.removeAnimal(myDog))
console.log('all pets : ', myPetShop.petList)

console.log(myPetShop.removeAnimal(myBird))
console.log('all pets : ', myPetShop.petList)

console.log(myPetShop.removeAnimal(myCat))
console.log('all pets : ', myPetShop.petList)