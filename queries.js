const { User, Pet, Age, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
  console.log(JSON.stringify(data, null, 2))
}
//Create
const createNewUser = async () => {
    const newUser = await User.create({
        firstName: 'Michelle',
        lastName: 'Flores'
    }
    )
      stringify(newUser)
  }
  const createNewPet = async () => {
    const newPet = await Pet.create({
        firstName: 'Nimbus',
        animalType: 'Dog',
        breed: 'Australian Shepherd'

    }
    )
      stringify(newPet)
  }
  const createAge = async () => {
    const newAge = await Age.create({
        personName: 20,
        dogAge: 10
    }
    )
      stringify(newAge)
  }

//READ 
    const findAllUsers = await User.findAll()
    stringify(findAllUsers)

    const findPets = await Pet.findAll()
    stringify(findPets)

    const findUserByAge = await Age.findByPk({where: {personName:22}})
    stringify(findUserByAge)

//UPDATE

    const updateUserName = await User.update({ firstName: 'Christian'}, { where: { firstName: 'Michelle'}})
    const newUserName = await User.findByPk(7)
    stringify(newUserName)

    const updateBreed = await Pet.update({ breed: 'Chihuahua'}, { where: { breed: 'Australian Shepherd'}})
    const newBreedName = await Pet.findByPk(7)
    stringify(newBreedName)

//DELETE

    const deletedUser = await User.destroy({ where: { lastName: "Flores"}})
    const user = await User.findAll()
    stringify(user)

    const deletedDogs = await Pet.destroy({ where: { animalType: "dog"}})
    const dogs = await Pet.findAll()
    stringify(dogs)

    const deletedByAge = await Age.destroy({ where: { dogAge: 3}})
    const years = await Pet.findByPk(7)
    stringify(years) //table doesn't work says 









const run = async () => {
    try {
        await createNewUser()
        await createNewPet()
        await createAge()
        await findAllUsers()
        await findPets()
        await updateUserName()
        await updateBreed()
        await findUserByAge()
        await deletedUser()
        await deletedDogs()
        await deletedByAge()

    } catch (error) {
    } finally {
      await sequelize.close()
    }
  }
  
  run()