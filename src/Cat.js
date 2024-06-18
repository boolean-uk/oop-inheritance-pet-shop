const Animal = require('./Animal')

class Cat extends Animal {
    constructor (name, age, expectedLifespan) {
        super {name, age, expectedLifespan}
    }

    makesound() {
        return 'Meow Meow'
    }
}

module.exports = Cat