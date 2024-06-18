const PetShop = require("../src/index");

class Animal {
	constructor(name, lifespan, age) {
		this.name = name;
		this.lifespan = lifespan;
		this.age = age;
	}
}
class Dog extends Animal {
	//does some stuff.
}
class Labrador extends Dog {
	constructor(name, lifespan, age) {
		super(name, lifespan, age);
		this.breed = "Labrador";
	}
}
class Poodle extends Dog {
	constructor(name, lifespan, age) {
		super(name, lifespan, age);
		this.breed = "Poodle";
	}
}
class Reptile extends Animal {}

class Lizard extends Reptile {}
class Snake extends Reptile {}
class Iguana extends Reptile {}

function defaultPriceFunction(pet, basePrice) {
	return basePrice + pet.age * 0.5;
}

function labradorPriceFunction(pet) {
	return defaultPriceFunction(pet, 100);
}

function poodlePriceFunction(pet) {
	return defaultPriceFunction(pet, 150);
}

const reptileShopSchema = [
	{
		class: Reptile,
		capacity: 20,
		areas: [
			{
				class: Lizard,
				capacity: 5,
				priceFunction: labradorPriceFunction,
			},
			{
				class: Iguana,
				capacity: 5,
				priceFunction: poodlePriceFunction,
			},
			{
				class: Snake,
				capacity: 1,
				priceFunction: labradorPriceFunction,
			},
		],
	},
];

const zooShopSchema = [
	{
		class: Dog,
		capacity: 2,
		areas: [
			{
				class: Labrador,
				capacity: 2,
				priceFunction: labradorPriceFunction,
			},
			{
				class: Poodle,
				capacity: 1,
				priceFunction: poodlePriceFunction,
			},
		],
	},
	{
		class: Reptile,
		capacity: 20,
		areas: [
			{
				class: Lizard,
				capacity: 5,
				priceFunction: labradorPriceFunction,
			},
			{
				class: Iguana,
				capacity: 5,
				priceFunction: poodlePriceFunction,
			},
			{
				class: Snake,
				capacity: 1,
				priceFunction: labradorPriceFunction,
			},
		],
	},
];

describe("petshop", () => {
	let dogPetShop, reptilePetShop;

	beforeEach(() => {
		const dogShopSchema = [
			{
				class: Dog,
				capacity: 2,
				areas: [
					{
						class: Labrador,
						capacity: 2,
						priceFunction: labradorPriceFunction,
					},
					{
						class: Poodle,
						capacity: 1,
						priceFunction: poodlePriceFunction,
					},
				],
			},
		];
		dogPetShop = new PetShop(dogShopSchema);
		reptilePetShop = new PetShop(reptileShopSchema);
		console.log("Dog", dogPetShop);
	});

	it("Should initialize a shop with a schema and an empty animals array", () => {
		expect(dogPetShop.totalAnimals).toBe(0);
	});

	it("Should only add an animal described in the pet shop schema", () => {
		expect(dogPetShop.add(new Poodle("Missy", 10, 5))).toBe(true);
		expect(dogPetShop.add(new Lizard("Lizardman", 10, 5))).toBe(false);
	});

	it("Should only remove an animal that is in the pet shop", () => {
		expect(dogPetShop.add(new Poodle("Missy", 10, 5))).toBe(true);

		expect(dogPetShop.remove(new Poodle("Missy", 10, 5))).toBeDefined();
		expect(
			dogPetShop.remove(new Lizard("Lizardman", 10, 5))
		).toBeUndefined();
	});

	it("Should not exceed the max capacity for the animal described in the pet shop schema", () => {
		//pet shop only allows 2 dogs, either 2 labradors or 1 poodle and 1 labrador
		expect(dogPetShop.add(new Poodle("Missy", 10, 5))).toBe(true);
		expect(dogPetShop.add(new Poodle("eldooP", 10, 5))).toBe(false);
		expect(dogPetShop.add(new Labrador("Max", 10, 5))).toBe(true);
		expect(dogPetShop.add(new Labrador("Sirius", 10, 5))).toBe(false);
		expect(dogPetShop.remove(new Poodle("Missy", 10, 5))).toBeDefined();
		expect(dogPetShop.add(new Labrador("Sirius", 10, 5))).toBe(true);
	});
});
