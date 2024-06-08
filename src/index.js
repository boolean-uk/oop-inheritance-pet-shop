class PetShop {
  constructor() {
    this.animalsList = []
    this.stockLimit = {
      Labrador: 4,
      GermanShepherd: 8,
      Siamese: 5,
      MaineCoon: 7,
      Budgerigar: 9,
      Parrot: 6,
      Betta: 8,
      NeonTetra: 10,
    }
    this.totalStockLimit = {
      Dog: 10,
      Cat: 12,
      Bird: 14,
      Fish: 16,
    }
  }

  addAnimal(animal) {
    const breedType = animal.constructor.name
    const mainType =
      breedType === 'Labrador' || breedType === 'GermanShepherd'
        ? 'Dog'
        : breedType === 'Siamese' || breedType === 'MaineCoon'
        ? 'Cat'
        : breedType === 'Budgerigar' || breedType === 'Parrot'
        ? 'Bird'
        : breedType === 'Betta' || breedType === 'NeonTetra'
        ? 'Fish'
        : null

    if (mainType === null) {
      throw new Error(`Invalid breed type: ${breedType}`)
    }

    if (this.animalsList.some((a) => a.name === animal.name)) {
      throw new Error(`An animal with name ${animal.name} already exists.`)
    }

    if (
      this.animalsList.filter((a) => a.constructor.name === breedType).length >=
      this.stockLimit[breedType]
    ) {
      throw new Error(
        `The ${breedType} stock limit of ${this.stockLimit[breedType]} has been reached.`
      )
    }

    if (this.animalsList.length >= this.totalStockLimit[mainType]) {
      throw new Error(`The ${mainType} stock limit of ${this.totalStockLimit[mainType]} has been reached.`)
    }

    this.animalsList.push(animal)
  }
}

class Animal extends PetShop {
  constructor(name, age, expectedLifeSpan) {
    super()
    if (this.isString(name) && this.isNumber(age, expectedLifeSpan)) {
      this.name = name
      this.age = age
      this.expectedLifeSpan = expectedLifeSpan
    } else {
      throw new Error("The properties weren't filled in correctly.")
    }
  }

  isString(name) {
    return typeof name === 'string' && name !== ''
  }

  isNumber(...props) {
    return props.every((prop) => typeof prop === 'number' && prop > 0)
  }

  makeSound() {
    return `${this.name} made a sound.`
  }
}

class Labrador extends Animal {
  constructor(name, age, expectedLifeSpan) {
    super(name, age, expectedLifeSpan)
  }
}

class GermanShepherd extends Animal {
  constructor(name, age, expectedLifeSpan) {
    super(name, age, expectedLifeSpan)
  }
}

class Siamese extends Animal {
  constructor(name, age, expectedLifeSpan) {
    super(name, age, expectedLifeSpan)
  }
}

class MaineCoon extends Animal {
  constructor(name, age, expectedLifeSpan) {
    super(name, age, expectedLifeSpan)
  }
}

class Budgerigar extends Animal {
  constructor(name, age, expectedLifeSpan) {
    super(name, age, expectedLifeSpan)
  }
}

class Parrot extends Animal {
  constructor(name, age, expectedLifeSpan) {
    super(name, age, expectedLifeSpan)
  }
}

class Betta extends Animal {
  constructor(name, age, expectedLifeSpan) {
    super(name, age, expectedLifeSpan)
  }
}

class NeonTetra extends Animal {
  constructor(name, age, expectedLifeSpan) {
    super(name, age, expectedLifeSpan)
  }
}

export {
  Labrador,
  GermanShepherd,
  Siamese,
  MaineCoon,
  Budgerigar,
  Parrot,
  Betta,
  NeonTetra,
}
export default PetShop
