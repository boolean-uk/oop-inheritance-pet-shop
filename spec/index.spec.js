import PetShop, {
    LabradorRetriever,
    GermanShepherd,
    Beagle,
    Siamese,
    Persian,
    MaineCoon,
    Budgerigar,
    Cockatiel,
    AfricanGreyParrot,
    Goldfish,
    Betta,
    Guppy,
} from '../src/index.js'

describe('petshop', () => {
    let petShop
    beforeEach(() => {
        petShop = new PetShop()
    })

    it('succesfully creates the empty petshop', () => {
        expect(petShop.contents.length).toBe(0)
    })

    it('adds an animal to the petshop', () => {
        const dog1 = new LabradorRetriever('Doug', 4)

        petShop.addAnimal(dog1)

        expect(petShop.contents[0].name).toBe('Doug')
        expect(petShop.contents[0].age).toBe(4)
    })

    it('cannot add additional animals above the set limit', () => {
        const dog1 = new LabradorRetriever('Doug', 4)
        const dog2 = new GermanShepherd('Hans', 2)
        const dog3 = new Beagle('Bugle', 5)
        const dog4 = new Beagle('Buster', 2)
        const dog5 = new LabradorRetriever('Dave', 4)

        petShop.addAnimal(dog1)
        petShop.addAnimal(dog2)
        petShop.addAnimal(dog3)
        petShop.addAnimal(dog4)
        

        expect(() => {petShop.addAnimal(dog5)}).toThrow(Error('Pet shop at capacity for this class of animal'))
    })
})

describe('animal', () => {
    it('creates a new Labrador', () => {
        const dog1 = new LabradorRetriever('Doug', 4)

        expect(dog1).toBeInstanceOf(LabradorRetriever)
    })

    it('makes the correct sound', () => {
        const dog1 = new LabradorRetriever('Doug', 4)

        expect(dog1.makeSound()).toBe('Bark')
    })
})
