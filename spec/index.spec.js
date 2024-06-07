import PetShop from "../src/PetShop.js";

describe('Pet shops', ()=> {
    let testShop;

    beforeEach(() => {
        testShop = new PetShop(5, 5, 5, 5)
    })

    it('should be an instance of the pet shop class', ()=> {
        expect(testShop).toBeInstanceOf(PetShop)
    })

})