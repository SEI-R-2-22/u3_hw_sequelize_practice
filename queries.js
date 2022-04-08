const { Dog, Cat, Person, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
  console.log(JSON.stringify(data, null, 2))
}
//find dogs
const findAllDogs = async () => {
  const result = await Dog.findAll()
  stringify(result)
}
//find cats
const findAllCats = async () => {
  const result = await Cat.findAll()
  stringify(result)
}
//find persons
const findAllPersons = async () => {
  const result = await Person.findAll()
  stringify(result)
}
//create dog
const createNewDog = async () => {
  const result = await Dog.create({
    name: "Louie",
    sound: "Bark!",
    breed: "Doberman"
  })
  stringify(result)
}
//create cat
const createNewCat = async () => {
  const result = await Cat.create({
    name: "Leo",
    sound: "Meow!",
    breed: "bald cat"
  })
  stringify(result)
}
//create person
const createNewPerson = async () => {
  const result = await Person.create({
    name: "Bryan",
    sound: "Hello!",
    ethnicity: "Hispanic"
  })
  stringify(result)
}
//delete dog
const deleteDog = async () => {
  const result = await Dog.destroy({
    where: {name: "Louie"}
  })
  stringify(result)
}
//delete cat
const deleteCat = async () => {
  const result = await Cat.destroy({
    where: {name: "Leo"}
  })
  stringify(result)
}
//delete person
const deletePerson = async () => {
  const result = await Person.destroy({
    where: {name: "Bryan"}
  })
  stringify(result)
}
//update dog
const updateDog = async () => {
  const result = await Dog.update({
    name: "Louis",
  }, { where: {name: "Louie"}})
  stringify(result)
}
//update cat
const updateCat = async () => {
  const result = await Cat.update({
    name: "Leonardo",
  }, { where: {name: "Leo"}})
  stringify(result)
}
//update person
const updatePerson = async () => {
  const result = await Person.update({
    name: "Bryann",
  }, { where: {name: "Bryan"}})
  stringify(result)
}





const run = async () => {
  try {
    // await findAllDogs()
    // await findAllCats()
    // await findAllPersons()
    // await createNewCat()
    // await createNewDog()
    // await createNewPerson()
    // await deleteDog()
    // await deleteCat()
    // await deletePerson()
    // await updateDog()
    // await updateCat()
    // await updatePerson()
    
  } catch (error) {

  } finally {
    await sequelize.close()
  }
}

run()