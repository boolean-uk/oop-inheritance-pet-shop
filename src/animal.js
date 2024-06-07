class Animal {
  constructor(name, age, lifespan){
    this.name = name
    this.age = age
    this.lifespan = lifespan
  }

  sound(){
    return `I am ${this.name}`
  }
}

export { Animal }
