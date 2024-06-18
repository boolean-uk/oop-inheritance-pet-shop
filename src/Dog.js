const Animal = require('./Animal')

class Dog extends Animal {
    constructor (name, age, expectedLifespan ) {
        super(name, age, expectedLifespan)
    }

    makesound() {
        return 'woof!'
    }
}

module.exports = Dog