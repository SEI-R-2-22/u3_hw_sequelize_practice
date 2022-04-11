const { Person, Car, Job, sequelize } = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const findAllPeople = async () => {
  const result = await Person.findAll()
  stringify(result)
}

const findAllCars = async () => {
    const result = await Car.findAll()
    stringify(result)
  }

  const findAllJobs = async () => {
    const result = await Job.findAll()
    stringify(result)
  }

const createPerson = async () => {
  const result = await Person.create({
    firstName: "Harvey",
    lastName: "Stenger",
    income: 500000
  })
  stringify(result)
}

const createCar = async () => {
    const result = await Car.create({
      make: "Mazda",
      model: "3",
      color: "Black"
    })
    stringify(result)
  }

  const createJob = async () => {
    const result = await Job.create({
      name: "Mortician",
      hoursPerWeek: 45,
      remote: false
    })
    stringify(result)
  }

const updatePerson = async () => {
  const result = await Person.update({
    lastName: "Cook"
  }, { where: {lastName: "Apple"}})
  stringify(result)
}

const updateJob = async () => {
    const result = await Job.update({
      remote: true
    }, { where: {remote: false}})
    stringify(result)
  }

  const paintCar = async () => {
    const result = await Car.update({
      color: "Red"
    }, { where: {color: "Black"}})
    stringify(result)
  }

const deletePerson = async () => {
  const result = await Person.destroy({where: {firstName: "Harvey"}})
  stringify(result)
}

const deleteJob = async () => {
    const result = await Person.destroy({where: {name: "Mortician"}})
    stringify(result)
  }

const deleteCar = async () => {
const result = await Car.destroy({where: {model: "3"}})
stringify(result)
}

async function main() {
  try {
    await createPerson()
    await createCar()
    await createJob()
    await findAllCars()
    await findAllJobs()
    await findAllPeople()
    await updateJob()
    await updatePerson()
    await paintCar()
    await deleteCar()
    await deleteJob()
    await deletePerson()
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()