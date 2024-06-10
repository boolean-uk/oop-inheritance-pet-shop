import Petshop, {
  Animal,
  Dog,
  Rottweiler,
  Cat,
  Persian,
  Bird,
  Finch,
} from "../src/index.js";

describe("Petshop", () => {
  let petshop;

  beforeEach(() => {
    petshop = new Petshop();
  });

  it("should exist", () => {
    expect(petshop).toBeInstanceOf(Petshop);
  });

  it("should add a new animal", () => {
    petshop.addAnimal(new Dog("Nany", 5, 15));

    expect(petshop.animals.length).toBe(1);
    expect(petshop.animals[0]).toBeInstanceOf(Dog);
    expect(petshop.animals[0].name).toBe("Nany");
  });

  it("should add different animals", () => {
    petshop.addAnimal(new Dog("Nany", 5, 15));
    petshop.addAnimal(new Cat("Gatto", 2, 10));

    expect(petshop.animals.length).toBe(2);
    expect(petshop.animals[1]).toBeInstanceOf(Cat);
    expect(petshop.animals[1].name).toBe("Gatto");
  });

  it("animal should have name, age, expected lifespan", () => {
    petshop.addAnimal(new Dog("Nany", 5, 15));
    petshop.addAnimal(new Cat("Gatto", 2, 10));

    expect(petshop.animals[1].name).toBe("Gatto");
    expect(petshop.animals[1].age).toBe(2);
    expect(petshop.animals[1].lifespan).toBe(10);
  });

  it("animal should have ability to make sound", () => {
    petshop.addAnimal(new Dog("Nany", 5, 15));
    petshop.addAnimal(new Cat("Gatto", 2, 10));

    expect(petshop.animals[1].speak()).toBe("Hi! My name is Gatto.");
  });

  it("should get all animals", () => {
    petshop.addAnimal(new Dog("Nany", 5, 15));
    petshop.addAnimal(new Cat("Gatto", 2, 10));

    expect(petshop.get().length).toBe(2);
  });

  it("should get animals by class", () => {
    petshop.addAnimal(new Dog("Nany", 5, 15));
    petshop.addAnimal(new Cat("Gatto", 2, 10));

    expect(petshop.get(Dog).length).toBe(1);
    expect(petshop.get(Dog)[0].name).toBe("Nany");
  });
});
