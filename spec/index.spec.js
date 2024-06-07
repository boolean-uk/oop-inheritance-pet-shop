import PetShop from "../src/PetShop.js";
import { Dog, Cat, Fish, Bird } from "../src/Animal.js";

describe("Pet shops", () => {
  let testShop;
  let chihuahua;
  let irishWolfHound;
  let britishShortHair;
  let siamese
  let parrot
  let canary
  let goldfish
  let clownfish

  beforeEach(() => {
    testShop = new PetShop(5, 5, 5, 5);
    chihuahua = new Dog("Steve", 15, "YAP YAP YAP", 5, 6);
    irishWolfHound = new Dog("Dave", 13, "YARF", 25, 2);
    britishShortHair = new Cat("Cliff", 15, "Prrr Prrr", 10, 4);
    siamese = new Cat("Whiskers", 14, "Meow Meow", 12, 3);
    parrot = new Bird("Polly", 20, "Squawk", 30, 4);
    canary = new Bird("Tweety", 10, "Tweet Tweet", 15, 1);
    goldfish = new Fish("Goldie", 5, "Blub Blub", 5, 2);
    clownfish = new Fish("Nemo", 6, "Blub Blub", 8, 1);

    testShop.addStock(chihuahua, irishWolfHound, britishShortHair, siamese, parrot, canary, goldfish, clownfish)
  });

  it("should be an instance of the pet shop class", () => {
    expect(testShop).toBeInstanceOf(PetShop);
  });

  it("should have animals that can make a noise", () => {
    expect(chihuahua.makeSound()).toEqual("YAP YAP YAP");
  });

  it ('should be able to have stock added and stored', () => {
    expect(testShop.getStockCount()).toEqual(8)
  })
});
