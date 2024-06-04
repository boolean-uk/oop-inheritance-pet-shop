# OOP - Inheritance

1. Fork and clone this repository
2. `npm ci` to install dependencies
3. `npx jasmine` to run any tests you create

## Core Criteria

Create a pet shop management application that allows staff to organise different animals.

- The pet shop should be able to stock various different types of animals
- Animals should all have a name, age, expected lifespan and the ability to make a sound
- The pet shop should have, at least, different types of dogs, cats, birds and fish
  - You must use inheritance to define each type of animal
- You must create at least one test for every function you write

## Extensions

1. The pet shop should have individual stock limits for every type of animal
    - E.g. the shop can store more goldfish than rainbow fish
2. The pet shop should have a hard limit for every main type of animal
    - E.g. the shop can only store a max number of total fish
3. The business owner should be able to open multiple different pet shops with their own limits and animals
4. A customer should be able to purchase animals and a receipt be generated
    - You will need to add prices to your animals
    - Use your previous exercises as a guide for accomplishing this. E-commerce can become complex very quickly, be sure to verify your work with tests
5. Some animals should be packaged as a discount deal:
    - 3 fish for the price of two
    - 20% off birds if you buy 1 dog
    - Buy one get one free on cats