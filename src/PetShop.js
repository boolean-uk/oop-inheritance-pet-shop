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
    this.breedLimits[breed] = limit
  }
}

export default PetShop;
