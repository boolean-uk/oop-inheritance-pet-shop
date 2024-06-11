import PetShop from "../src/index.js";

describe("Core Criteria", () => {
    let petShop;
  
    it("should exist", () => {
      petShop = new PetShop([]);
      expect(petShop).toBeInstanceOf(PetShop);
    })
})