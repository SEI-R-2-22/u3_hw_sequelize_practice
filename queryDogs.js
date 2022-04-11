const { Dog, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
  console.log(JSON.stringify(data, null, 2))
}

const findAllDogs = async () => {
  const result = await Dog.findAll()
  stringify(result)
}

const createNewDog = async () => {
  const result = await Dog.create({
    breed: 'Chihuahua',
    firstName: 'Full Might',
    walkFreq: 'daily'
  })
  stringify(result)
}

const deleteDogWhere = async () => {
  const result = await Dog.destroy({
    where: { firstName: 'Full Might' }
  })
  stringify(result)
}

const updateDog = async () => {
  const result = await Dog.update(
    { firstName: 'Full Power' },
    { where: { fullName: 'Full Might' } }
  )
  stringify(result)
}

const run = async () => {
  try {
    //await findAllDogss()
    //await createNewDog()
    //await deleteDogWhere()
    //await updateDog()
  } catch (error) {
  } finally {
    await sequelize.close()
  }
}

run()
