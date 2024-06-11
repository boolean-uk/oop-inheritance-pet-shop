import PetShop, { AnimalType, Animal, Dog, Cat, Bird, Fish  } from "../src/index.js";

describe("Core Criteria", () => {
    let petShop;

  
    it("should exist", () => {
      petShop = new PetShop([]);
      expect(petShop).toBeInstanceOf(PetShop);
      
      let animal = new Animal("cow", 4, 10, "moooooo");
      expect(animal).toBeInstanceOf(Animal);
      animal = new Dog("Charger", 3, 9, "woof");
      expect(animal).toBeInstanceOf(Animal);
      expect(animal).toBeInstanceOf(Dog);
      animal = new Cat("whiskers", 3, 15, "meow");
      expect(animal).toBeInstanceOf(Animal);
      expect(animal).toBeInstanceOf(Cat);
      animal = new Bird("Tweeny", 3, 15, "tweeeiiit");
      expect(animal).toBeInstanceOf(Animal);
      expect(animal).toBeInstanceOf(Bird);
      animal = new Fish("Tinkerbell", 3, 15, "blooop blooop");
      expect(animal).toBeInstanceOf(Animal);
      expect(animal).toBeInstanceOf(Fish);
    });
    
    it("animals should have a name, age, expected lifespan and sound", () => {
        expect(() => {
          new Bird();
        }).toThrow("name is required");
        expect(() => {
          new Bird("Pinky");
        }).toThrow("age is required");
        expect(() => {
          new Bird("Pinky", 5);
        }).toThrow("expected lifespan is required");
        expect(() => {
          new Bird("Pinky", 5, 10);
        }).toThrow("sound is required");
        expect(() => {
          new Bird("Pinky", 5, 10, "quark");
        }).not.toThrow();
      });
    
      it("should stock various different types of animals", () => {
        let dogType = new AnimalType("dog", 10);
        let catType = new AnimalType("cat", 8);
        let birdType = new AnimalType("bird", 12);
        let fishType = new AnimalType("fish", 6);
        let frogType = new AnimalType("frog", 9);
    
        petShop = new PetShop([dogType, catType, birdType, fishType, frogType]);
        expect(petShop.animalTypeStockLimit["dog"].limit).toBe(10);
        expect(petShop.animalTypeStockLimit["cat"].limit).toBe(8);
        expect(petShop.animalTypeStockLimit["bird"].limit).toBe(12);
        expect(petShop.animalTypeStockLimit["fish"].limit).toBe(6);
        expect(petShop.animalTypeStockLimit["frog"].limit).toBe(9);
        
      });
    
      it("should add animal to pet shop", () => {
        let dog = new Dog("Charger", 3, 9, "woof");
        let cat = new Cat("whiskers", 3, 15, "meow");
        let bird = new Bird("Tweeny", 3, 15, "tweeeiiit");
        let fish = new Fish("Tinkerbell", 3, 15, "blooop blooop");
      });
    
})