import PetShop, {
  Labrador,
  GermanShepherd,
  Siamese,
  Budgerigar,
  Betta
} from '../src/index.js'

describe('Pet Shop', () => {
  let petShop

  beforeEach(() => {
    petShop = new PetShop()
  })

  it('should be able to stock various different types of animals', () => {
    const newLabrador = new Labrador('sully', 3, 13)
    petShop.addAnimal(newLabrador)

    const newSiamese = new Siamese('lenny', 6, 18)
    petShop.addAnimal(newSiamese)

    const newBudgerigar = new Budgerigar('ian', 4, 20)
    petShop.addAnimal(newBudgerigar)

    const newBetta = new Betta('marlin', 1, 5)
    petShop.addAnimal(newBetta)

    expect(petShop.animalsList).toEqual([
      new Labrador('sully', 3, 13),
      new Siamese('lenny', 6, 18),
      new Budgerigar('ian', 4, 20),
      new Betta('marlin', 1, 5)
    ])
  })

  it('should be able to make sound for each of the animals', () => {
    const newLabrador = new Labrador('sully', 3, 13)

    expect(newLabrador.makeSound()).toBe('sully made a sound.')
  })

  it("should throw an error if the animal's properties weren't filled in correctly", () => {
    expect(() => new Labrador('', 3, 13)).toThrowError(
      "The properties weren't filled in correctly."
    )
  })

  it('should throw an error if adding the animal exceeds the breed type limit', () => {
    const newLabrador1 = new Labrador('sully', 3, 13)
    petShop.addAnimal(newLabrador1)

    const newLabrador2 = new Labrador('rex', 6, 13)
    petShop.addAnimal(newLabrador2)

    const newLabrador3 = new Labrador('zeus', 10, 13)
    petShop.addAnimal(newLabrador3)

    const newLabrador4 = new Labrador('thor', 7, 13)
    petShop.addAnimal(newLabrador4)

    expect(() => petShop.addAnimal(new Labrador('rocky', 2, 13))).toThrowError(
      'The Labrador stock limit of 4 has been reached.'
    )
  })

  it('should throw an error if adding the animal exceeds the main type limit', () => {
    const newLabrador1 = new Labrador('sully', 3, 13)
    petShop.addAnimal(newLabrador1)

    const newLabrador2 = new Labrador('rex', 6, 13)
    petShop.addAnimal(newLabrador2)

    const newGermanShepherd1 = new GermanShepherd('max', 1, 12)
    petShop.addAnimal(newGermanShepherd1)

    const newGermanShepherd2 = new GermanShepherd('zeus', 10, 12)
    petShop.addAnimal(newGermanShepherd2)

    const newGermanShepherd3 = new GermanShepherd('thor', 7, 12)
    petShop.addAnimal(newGermanShepherd3)

    const newGermanShepherd4 = new GermanShepherd('bob', 3, 12)
    petShop.addAnimal(newGermanShepherd4)

    const newGermanShepherd5 = new GermanShepherd('brave', 5, 12)
    petShop.addAnimal(newGermanShepherd5)

    const newGermanShepherd6 = new GermanShepherd('mickey', 2, 12)
    petShop.addAnimal(newGermanShepherd6)

    const newGermanShepherd7 = new GermanShepherd('rooney', 11, 12)
    petShop.addAnimal(newGermanShepherd7)

    const newGermanShepherd8 = new GermanShepherd('drusky', 9, 12)
    petShop.addAnimal(newGermanShepherd8)

    expect(() => petShop.addAnimal(new Labrador('rocky', 2, 13))).toThrowError(
      'The Dog stock limit of 10 has been reached.'
    )
  })

  it('should throw an error if trying to add an animal with the same name as another animal already added', () => {
    const newLabrador = new Labrador('sully', 3, 13)
    petShop.addAnimal(newLabrador)

    expect(() => petShop.addAnimal(new Labrador('sully', 8, 13))).toThrowError(
      'An animal with name sully already exists.'
    )
  })
})
