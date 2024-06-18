const Animal = require('./Animal')

class Bird extends Animal {
    constructor (name, age, expectedLifespan) {
        super (name, age, expectedLifespan)
    }

    makesound() {
        return 'Chirp'
    }
}

module.exports = Bird