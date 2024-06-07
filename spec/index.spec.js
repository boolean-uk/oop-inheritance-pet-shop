import Petshop from "../src/index.js";

describe('Petshop', () => {
    let petshop

    beforeEach(() => {
        petshop = new Petshop()
    })

    it('should exist', () => {
        expect(petshop).toBeInstanceOf(Petshop)
        expect(petshop.animals.length).toBe(0)
    })
})