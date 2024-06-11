const { Dog, Cat, Bird, Fish, PetShop } = require('../src/index');

describe("Animal classes", () => {
  it("Dog should make a woof sound", () => {
    const dog = new Dog("Rex", 5, 10);
    expect(dog.makeSound()).toBe("Woof!");
  });

  it("Cat should make a meow sound", () => {
    const cat = new Cat("Whiskers", 3, 15);
    expect(cat.makeSound()).toBe("Meow!");
  });

  it("Bird should make a chirp sound", () => {
    const bird = new Bird("Tweety", 1, 5);
    expect(bird.makeSound()).toBe("Chirp!");
  });

  it("Fish should make a blub sound", () => {
    const fish = new Fish("Goldie", 1, 2);
    expect(fish.makeSound()).toBe("Blub!");
  });
});

describe("PetShop class", () => {
  it("should add animals to the correct stock", () => {
    const shop = new PetShop();

    const dog = new Dog("Rex", 5, 10);
    const cat = new Cat("Whiskers", 3, 15);
    const bird = new Bird("Tweety", 1, 5);
    const fish = new Fish("Goldie", 1, 2);

    shop.addAnimal(dog);
    shop.addAnimal(cat);
    shop.addAnimal(bird);
    shop.addAnimal(fish);

    const stock = shop.getStock();

    expect(stock.dogs).toContain(dog);
    expect(stock.cats).toContain(cat);
    expect(stock.birds).toContain(bird);
    expect(stock.fish).toContain(fish);
  });

  it("should respect individual stock limits", () => {
    const shop = new PetShop();
    shop.setLimit("dogs", 1);

    const dog1 = new Dog("Rex", 5, 10);
    const dog2 = new Dog("Buddy", 3, 12);

    shop.addAnimal(dog1);

    expect(() => {
      shop.addAnimal(dog2);
    }).toThrowError("Cannot add more dogs, limit reached");
  });

  it("should throw an error for unknown animal type limit", () => {
    const shop = new PetShop();
    expect(() => {
      shop.setLimit("lions", 1);
    }).toThrowError("Unknown animal type");
  });
});
