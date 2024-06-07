class Animal {
    #name
    #age
    #expectedLifespan

    constructor(name, age, expectedLifespan) {
        this.#name = name
        this.#age = age
        this.#expectedLifespan = expectedLifespan
    }

    makeSound() {
        throw new Error("To be overridden by subclasses")
    }

    get name() {
        return this.#name
    }

    get age() {
        return this.#age
    }

    get expectedLifespan() {
        return this.#expectedLifespan
    }

}

export { Animal } 