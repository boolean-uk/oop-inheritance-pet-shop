const {
  PetShop,
  Dog,
  Cat,
  Bird,
  Fish,
} = require(`/Users/samisaeed/Boolean/oop-inheritance-pet-shop/src/index.js`);

describe("PetShop", () => {
  it("residents should have the ability to make a sound", function () {
    const dog = new Dog();
    const cat = new Cat();
    const bird = new Bird();
    const fish = new Fish();

    expect(dog.sound()).toEqual("Jack made a sound!");
    expect(cat.sound()).toEqual("Megan made a sound!");
    expect(bird.sound()).toEqual("Zema made a sound!");
    expect(fish.sound()).toEqual("Davi made a sound!");
  });
  it("residents should have an age", function () {
    const dog = new Dog();
    const cat = new Cat();
    const bird = new Bird();
    const fish = new Fish();

    expect(dog.age()).toEqual(12);
    expect(cat.age()).toEqual(5);
    expect(bird.age()).toEqual(24);
    expect(fish.age()).toEqual(2);
  });
  it("residents should have a life expectancy", function () {
    const dog = new Dog();
    const cat = new Cat();
    const bird = new Bird();
    const fish = new Fish();

    expect(dog.lifeExpectancy()).toEqual(15);
    expect(cat.lifeExpectancy()).toEqual(14);
    expect(bird.lifeExpectancy()).toEqual(5);
    expect(fish.lifeExpectancy()).toEqual(3);
  });
  it("residents should have a breed", function () {
    const dog = new Dog();
    const cat = new Cat();
    const bird = new Bird();
    const fish = new Fish();

    expect(dog.breed()).toEqual("German Shepard");
    expect(cat.breed()).toEqual("Sphinx");
    expect(bird.breed()).toEqual("Blue tit");
    expect(fish.breed()).toEqual("Goldfish");
  });
});
