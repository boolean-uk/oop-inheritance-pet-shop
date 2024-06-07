class PetShop {

    #currentStock
    constructor(fishLimit, dogLimit, birdLimit, catLimit) {
        this.fishLimit = fishLimit
        this.dogLimit = dogLimit
        this.birdLimit = birdLimit
        this.catLimit = catLimit
        this.shoppingCart = []
        this.#currentStock = []
    }

    addStock(...animals) {
        animals.forEach((animal) => this.#currentStock.push(animal))
    }

    getStockCount() {
        return this.#currentStock.length
    }

}


export default PetShop