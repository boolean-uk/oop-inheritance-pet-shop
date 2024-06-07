class PetShop {
  #currentStock;
  constructor(fishLimit, dogLimit, birdLimit, catLimit) {
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
}

export default PetShop;
