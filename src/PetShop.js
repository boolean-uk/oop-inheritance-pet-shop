import { Animal, Dog, Cat, Fish, Bird } from "./Animal.js";

class PetShop {
  #currentStock;
  constructor() {
    this.speciesLimits = {};
    this.breedLimits = {};
    this.shoppingCart = [];
    this.#currentStock = [];
  }

  addStock(...animals) {
    animals.forEach((animal) => {
      if (this.getBreedCount(animal.breed) >= this.breedLimits[animal.breed]) {
        throw new Error("That would exceed the breed limit");
      }

      if (
        this.getSpeciesCount(animal.constructor.name) >=
        this.speciesLimits[animal.constructor.name]
      ) {
        throw new Error("That would exceed the species limit");
      }
  
      animal.breed.toLowerCase();
      this.#currentStock.push(animal);
    });
  }

  getStockCount() {
    return this.#currentStock.length;
  }

  getStock() {
    return this.#currentStock;
  }

  setSpeciesLimit(species, limit) {
    this.speciesLimits[species] = limit;
  }

  setBreedLimit(breed, limit) {
    this.breedLimits[breed] = limit;
  }

  getBreedCount(breed) {
    return this.#currentStock.filter((animal) => (animal.breed = breed)).length;
  }

  getSpeciesCount(species) {
    return this.#currentStock.filter(
      (animal) => animal.constructor.name === species
    ).length;
  }
}

export default PetShop;
