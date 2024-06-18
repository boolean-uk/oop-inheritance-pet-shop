class PetShop {
	#shop_schema;
	#animals;

	constructor(schema) {
		this.#shop_schema = schema;

		this.#animals = [];
	}

	add(animal) {
		const animalGroup = this.#findAnimalGroupDataSchema(animal),
			animalData = this.#findAnimalDataSchema(animal);

		if (!animalData) return false;

		console.log(animalGroup.capacity, animalData.capacity);

		if (!(animalGroup.capacity > 0 && animalData.capacity > 0)) {
			return false;
		}

		animalGroup.capacity--;
		animalData.capacity--;
		this.#animals.push(animal);
		return true;
	}

	#findAnimalGroupDataSchema(animal) {
		for (let animalGroup of this.#shop_schema) {
			if (animal instanceof animalGroup.class) {
				return animalGroup;
			}
		}

		return undefined;
	}

	#findAnimalDataSchema(animal) {
		const animalGroup = this.#findAnimalGroupDataSchema(animal);

		if (!animalGroup) return undefined;

		for (let data of animalGroup.areas) {
			if (animal instanceof data.class) {
				return data;
			}
		}
	}

	remove(animal) {
		//get index
		const index = this.#animals.findIndex(
			(animalInStore) =>
				animalInStore.name === animal.name &&
				animalInStore.lifespan === animal.lifespan &&
				animalInStore.age === animal.age
		);
		//
		if (index === -1) return undefined;

		//update capacity
		const animalGroup = this.#findAnimalGroupDataSchema(animal),
			animalData = this.#findAnimalDataSchema(animal);
		animalData.capacity++;
		animalGroup.capacity++;

		//delete if exists
		return this.#animals.splice(index, 1)[0];
	}

	purchase(animal) {
		const shopAnimal = this.remove(animal);
		const animalData = this.#findAnimalDataSchema(shopAnimal);

		if (!shopAnimal) return undefined;

		return {
			animal: shopAnimal,
			price: animalData.priceFunction(shopAnimal),
		};
	}

	get totalAnimals() {
		return this.#animals.length;
	}

	createAnimalGroupSection(animalGroupSchema) {
		this.#shop_schema.push(animalGroupSchema);
	}

	createAnimalSection(animalGroupClass, animalSchema) {
		//find index of animal group
		//animalGroupSchema.areas.push(animalSchema)
	}
}

module.exports = PetShop;
