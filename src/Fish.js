const Animal = require('./Animal')

class Fish extends Animal {
    constructor (name, age, expectedLifespan) {
        super (name, age, expectedLifespan)
    }

    makesound() {
        return 'fish_sound'
    }
}

module.exports = Fish