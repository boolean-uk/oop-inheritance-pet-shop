import PetShop from "../src/PetShop.js";
import { Fish } from "../src/Species.js";


describe('Pet shops', ()=> {
    let testShop;
    let greatWhiteShark;
    

    beforeEach(() => {
        testShop = new PetShop(5, 5, 5, 5)
        greatWhiteShark = new Fish('fish', 'CHOMP', 50, 'great white shark', 2000, 24)
   
    })

    it('should be an instance of the pet shop class', ()=> {
        expect(testShop).toBeInstanceOf(PetShop)
    })

    it('should have animals that can make a noise', ()=> {
        expect(greatWhiteShark.makeSound()).toEqual('CHOMP')
    })

})