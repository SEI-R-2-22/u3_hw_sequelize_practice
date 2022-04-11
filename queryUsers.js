const { User, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
  console.log(JSON.stringify(data, null, 2))
}

const findAllUsers = async () => {
  const result = await User.findAll()
  stringify(result)
}

const createNewUser = async () => {
  const result = await User.create({
    fullName: 'Jane Plain',
    email: 'jane@plain.org',
    userName: 'plainjane',
    password: '123456',
    fullAddress: '123 Banana St'
  })
  stringify(result)
}

const deleteUserWhere = async () => {
  const result = await User.destroy({
    where: { fullName: 'Jane Plain' }
  })
  stringify(result)
}

const updateUser = async () => {
  const result = await User.update(
    { fullName: 'Jane Smith' },
    { where: { fullName: 'Jane Plain' } }
  )
  stringify(result)
}

const run = async () => {
  try {
    //await findAllUsers()
    //await createNewUser()
    //await deleteUserWhere()
    //await updateUser()
  } catch (error) {
  } finally {
    await sequelize.close()
  }
}

run()
