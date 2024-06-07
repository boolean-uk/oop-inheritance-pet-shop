import PetShop from "../src/PetShop.js";
import { Dog, Cat, Fish, Bird } from "../src/Animal.js";

describe("Pet shops", () => {
  let testShop;
  let steve;
  let dave;
  let cliff;
  let whiskers;
  let polly;
  let tweety;
  let goldie;
  let nemo;

  beforeEach(() => {
    testShop = new PetShop(5, 5, 5, 5);
    steve = new Dog("Chihuahua", 15, "YAP YAP YAP", 5, 6);
    dave = new Dog("Irish Wolfhound", 13, "YARF", 25, 2);
    cliff = new Cat("British Shorthair", 15, "Prrr Prrr", 10, 4);
    whiskers = new Cat("Siamese", 14, "Meow Meow", 12, 3);
    polly = new Bird("Parrot", 20, "Squawk", 30, 4);
    tweety = new Bird("Canary", 10, "Tweet Tweet", 15, 1);
    goldie = new Fish("Goldfish", 5, "Blub Blub", 5, 2);
    nemo = new Fish("Clownfish", 6, "Blub Blub", 8, 1);

    testShop.addStock(steve, dave, cliff, whiskers, polly, tweety, goldie, nemo);
  });

  it("should be an instance of the pet shop class", () => {
    expect(testShop).toBeInstanceOf(PetShop);
  });

  it("should have animals that can make a noise", () => {
    expect(steve.makeSound()).toEqual("YAP YAP YAP");
  });

  it ('should be able to have stock added and stored', () => {
    expect(testShop.getStockCount()).toEqual(8)
  })

  it ('should be able to set species limits', () => {
    testShop.setSpeciesLimit('chihuahua', 3) 

    expect(testShop.speciesLimits.chihuahua).toEqual(3)
  })

  
});
