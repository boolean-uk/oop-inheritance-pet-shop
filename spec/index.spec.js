import PetShop ,{LabradorRetriever, GermanShepherd, Beagle, Siamese, Persian, MaineCoon,Budgerigar,Cockatiel,AfricanGreyParrot,Goldfish, Betta, Guppy} from "../src/index.js"

describe('petshop', () =>{
    let petShop
    beforeEach(() => {
        petShop = new PetShop()
    })

    it('succesfully creates the empty petshop', () => {
        expect(petShop.contents.length).toBe(0)
    })

    it('adds an animal to the petshop', () => {
        const dog1 = new LabradorRetriever("Doug", 4)

        petShop.addAnimal(dog1)

        expect(petShop.contents[0].name).toBe("Doug")
        expect(petShop.contents[0].age).toBe(4)
    })
})

describe('animal', () => {
    it("creates a new Labrador", () => {
        const dog1 = new LabradorRetriever("Doug", 4)

        expect(dog1).toBeInstanceOf(LabradorRetriever)
    })

    
    it("makes the correct sound", () => {
        const dog1 = new LabradorRetriever("Doug", 4)

        expect(dog1.makeSound()).toBe('Bark')
    })
})